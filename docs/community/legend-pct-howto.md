### Required Development Setup
Set up develoment environment for *legend-pure* and *legend-engine* repositories: 
- https://github.com/finos/legend-pure/blob/master/README.md#development-setup
- https://github.com/finos/legend-engine/blob/master/README.md#development-setup
    - Note: legend-engine depends on legend-pure. **Modify** ```legend.pure.version``` of the legend-engine pom.xml to depend on the legend-pure **SNAPSHOT** version, once you have built legend-pure and before building legend-engine
 
#### Test your Development Setup
Once you have built the below repos, try running Pure code

*legend-pure*
- ```TestFunction_TestHelper_Compiled.java```
- ```TestFunction_TestHelper_Interpreted.java```


*legend-engine*

Provided with PureIDE is a ```welcome.pure``` file. F9 within this file to execute pure code.

# PCT Contribution Steps
*Awareness of the dev environment in which each step of the development loop occurs is key to maintaining velocity.*

| Language | Development Environment |
| --- | --- |
| Pure | [PureIDE](https://github.com/finos/legend-engine/blob/master/README.md#starting-pure-ide) |
| Java | IntelliJ |

The Pure Runtime cross-compiles *Pure native functions* to multiple targets. Native functions have a reference implementation in the Pure Runtime, and are cross-compiled by the Pure Runtime to *equivalent* implementations in target runtimes. 

Pure has two code paths for cross-compilation
1) *Interpreted* - Pure code is compiled on the fly (useful for interactive dev).
2)  *Compiled* - Pure code has already been compiled to a jar (useful for prod).

Note that PCT Function can be Pure-only (implemented in Pure), or "Native" (implemented in Java). The below steps cover Native Functions, but Pure-only PCT should follow the same principles and similar dev loops.

## Native PCT Functions
#### 1. Define the: a) the Native Function Signature, and b) Reference/Spec Implementation
The *Pure Reference/Spec Implementation* encapsulates the platform-specific expectations for the behavior of the function; it is implemented as a *Native Function*. It executes natively in the Pure Runtime and thus is written in Java. 

When defining a Native Function Signature, it is ***important to compare the equivalent function on at least 2 targets***. A minimum of 2 targets helps to ensure our function signature and reference implementation is properly abstracted.

##### Example
These two queries will not yield equivalent results. Further, you can see that the parameters they accept are different.
```Java
// DuckDb
Select time_bucket(Interval '2 Day', timestamp '2024-01-31 00:32:34');
// results in 
2024-01-31 00:00:00

// Snowflake
SELECT TIME_SLICE(TIMESTAMP_FROM_PARTS(2024, 01, 31, 00, 32, 34), 2, 'DAY', 'START')
// results in
2024-01-30 00:00:00.000
```
Understanding the minimal common elements to determine the appropriate Native Function signature is key. Consider the set of parameters and input/output required for cross-platform compilation capabilities.

```Java
// for the above, the native function signature we ended up with was:
native function
    <<PCT.function>>
    {
         doc.doc='calculates a time bucket for DateTime, where the bucket is of size quantity unit (e.g. 5 Hour). Uses unix Epoch as the origin for the calculation.'
    }
    meta::pure::functions::date::timeBucket(date:DateTime[1], quantity:Integer[1], unit:DurationUnit[1]):DateTime[1];

//notice how we have a docstring as part of the function signature
```
**Important: docstrings are Required**

In this example, we only needed one function signature. A native function can have more than one signature. **All signatures for the same native function should be written in the same file.** E.g. the above native function signature and its associated PCT functions exist in *timeBucket.pure*.

###### Dev Envs: PureIDE (native function signature); IntelliJ (reference/spec implementaiton), Target runtimes for testing behavior of equivalent function (e.g. DuckDb, Snowflake)*

#### 2. Native Function Development Loop
##### 2.i. Start by writing a draft native function signature in pure 
Depending on which repo was determined in Step 2, you would use welcome.pure in legend-engine or TestHelper_Interpreted.java in legend-pure.

##### How to use TestFunction_TestHelper_Interpreted.java
TestFunction_TestHelper_Interpreted.java (legend-pure)
```Java
    @After
    public void cleanRuntime()
    {
        runtime.delete("myScratchFn.pure");
    }

    protected static FunctionExecution getFunctionExecution()
    {
        return new FunctionExecutionInterpreted();
    }

    @Test
    public void testNativeFunctionTesterHelperBeforeAddingToPCT()
    {
        compileTestSource("myScratchFn.pure",
                         "native function meta::pure::functions::standard::myScratchFn(myString:String[1]):String[2];" +
                                 // this is an example of a pure function call
                                 "function meta::functions::myScratchFn(myString:String[1]):String[2]" +
                                 "{" +
                                 "   println('123');" +
                                 "   let myStrList = [$myString, $myString];" +
                                 "   println($myStrList);" +
                                 "   $myStrList;" +
                                 "}" +
                                 "function test():Any[*]\n" +
                                 "{" +
                                 "   let myString = 'abc';" +
                                 "   meta::functions::myScratchFn($myString);" +
                                 // if you call this function the call would fail due to missing wiring
                                 "   meta::pure::functions::standard::myScratchFn($myString); " +
                                "}");
        this.execute("test():Any[*]");
        runtime.delete("myScratchFn.pure");
    }
```

##### How to use PureIDE welcome.pure (legend-engine)
The same code outlined in the second param of "compileTestSource" in the TestHelper example above, can be written in the go():Any[*] function of welcome.pure. In PureIDE, hitting F9 will execute the code.
```Java
function go():Any[*]
{
    // Your pure code here
}
```

###### Dev Envs: PureIDE welcome.pure (legend-engine) or IntelliJ TestFunction_TestHelper_Interpreted.java (legend-pure)

##### 2.ii. Determine where the signature of the PCT Function and associated tests should reside.
Once you know how to run pure code, begin your development loop. Leverage the PCT Taxonomy conventions and the results of weekly Taxonomy review sessions to determine the repo/package in which to put your pure code.

###### PCT Taxonomy Conventions
The structure of *.pure files containing Platform Functions has been harmonized to reflect the four categories of Pure Functions:
1. Grammar (legend-pure) - functions needed for the grammar of the platform. Should almost never be modified. If needed, consult with a Legend CODEOWNER.
2. Essential (legend-pure) - foundational functions required for running tests int he platform (e.g. assert, eq). Should almost never be modified. If needed, consult with a Legend CODEOWNER.
3. Standard (legend-engine) - majority of platform functions will fall into this category
4. Relation (legend-engine) - platform functions specific to operating on relations (e.g. join)

It was not yet possible to harmonize pure packages to the new taxonomy reflected by the filesystem. Where it makes sense (e.g. adding a brand new package or function), the package name should mirror the new taxonomy reflected by the filesystem. The best example of the ideal taxonomy is the directory structure of legend-pure essential functions; however, please consult with an SME to confirm the proposed package/naming for your PCT function. In the future, pure package naming will be harmonized to follow the new taxonomy.

##### Example
```Java
// PCT Function Signature containing docstring; note that it specifies the expected params, output, and multiplicity
native function
    <<PCT.function>>
    {
         doc.doc='calculates a time bucket for DateTime, where the bucket is of size quantity unit (e.g. 5 Hour). Uses unix Epoch as the origin for the calculation.'
    }
    meta::pure::functions::date::timeBucket(date:DateTime[1], quantity:Integer[1], unit:DurationUnit[1]):DateTime[1];

// this is a "standard" function and so its signature and implemention live in this package:
legend-engine-core/legend-engine-core-pure/legend-engine-pure-code-functions-standard/

// in the above function signature, you can see the current pure package is
meta::pure::functions::date

// filesystem taxonomy of timeBucket.pure file containing the PCT function (in legend-engine)
core_functions_standard/date/operation/timeBucket.pure

// based on the filesystem taxonomy, ideally the package would be named thusly:
meta::pure::functions::date::operation

//however, in this instance we kept the existing pure package taxonomy for dates - until the taxonomy has been upgraded, please speak to an SME to double check your proposed package/naming
```

###### Dev Envs: PureIDE code search (legend-engine) IntelliJ code search (legend-pure)

##### 2.iii. Start writing some Pure Compatibility Tests (PCT) to encapsulate the understanding gained in 1., being careful to test for edge cases.
**PCT Tests should be written in the same file as your native function signature**

Note: test package naming is important (examples below).
###### Example
```Java
// Example Good package name: a test package named like so
meta::pure::functions::date::tests::timeBucket

// can be registered in expectedFailuers with one line for unsupported targets
pack("meta::pure::functions::date::tests::timeBucket", "\"meta::pure::functions::date::timeBucket_DateTime_1__Integer_1__DurationUnit_1__DateTime_1_ is not supported yet!\"")

// Example Bad package name: a test package named like so can only be registered in expectedFailures one by one
meta::pure::functions::date::tests
```

###### Dev Envs: PureIDE welcome.pure (legend-engine) or IntelliJ TestFunction_TestHelper_Interpreted.java (legend-pure)

##### 2.iv. Write the Reference/Spec implementation
Your native function implementation (Java code) will be split across 3 modules in the taxonomy package:
1. -compiled- the compiled module of the function taxonomy will contain the wiring needed by the Pure Runtime to *generate the compiled* java code
2. -interpreted- the interpreted module of the function taxonomy will contain the wiring needed for Pure Runtime to *interpret* and compile pure code on the fly
3. -shared- the class containing the code common to 1 and 2 should be put in this module. These utility classes help avoid duplication.

Note that you can wire the function in even if it hasn't been fully written. Use the helpers described in step 3.i. to test out the wiring of your native function. 

###### Example
see [TimeBucketShared in the example PR](https://github.com/finos/legend-engine/pull/3491/files#diff-6fdf9132208dc083a35c61ff70294ea2eb3b51e12f167a89f69c4a66bc741c6a).

###### Dev Env: IntelliJ

##### 2.v. Running PCTs against Native Function
Once the native function is wired across the compiled and interpreted paths, you can loop and iterate to refine the signature, implementation, and tests, using the *InMemory PCT Adapter*. PCT Adapters are functions that enable the cross-compilation and evaluation of PCT functions on target environments. The InMemory adapter does a pass-through to the Pure Runtime and is useful for running the native reference/spec implementation.

###### Example Usage
```Java
let inmemoryadapter = meta::pure::test::pct::testAdapterForInMemoryExecution_Function_1__X_o_;

// runs the PCT "testTimeBucketSeconds" against Reference Implementation (eval in pure runtime)
meta::pure::functions::date::tests::testTimeBucketSeconds($inmemoryadapter);
```

###### Dev Envs: PureIDE welcome.pure (legend-engine) or IntelliJ TestFunction_TestHelper_Interpreted.java (legend-pure)

#### 3. Target (cross-compilation) development loop
Once you have completed the Native Function development loop, it is time to wire your native function to cross-compile to the target environments (legend-engine)

##### 3.i. PCTs and PureToTarget wiring (e.g. PureToSQL). 
PCT are useful for testing your wiring, as they are evaluated in the context of the target platform. The assert happens in the Pure Runtime, but the assertion is over the result of an eval on the target platform (i.e. that the cross-compilation behaves as the platform expects).

PCT Adapters are functions that enable the cross-compilation of PCT to target environments. To find a current list of adapters, search for the phrase ```<<PCT.adapter>>``` in PureIDE. Notes on selected adapter are below:

| Target | Notes |
| --- | --- |
| Snowflake | Snowflake integration requires connection to your Snowflake account. Look at the code in SnowflakeTestConnectionIntegration and set up neded env vars for accessing snowflake in order to run this adapter. |
| Java Platform Binding | Legend platform has the capability of generating java code from pure code. Think of it as the equivalent of pureToSQL but it's pureToJava instead. This is distinct from Pure Runtime java code. This is code generated by the Pure Runtime itself to encapsulate queries meant to run on a Java Target Environment. |

##### Example Target Adapter Usage
```Java
let duckdbadapter = meta::relational::tests::pct::testAdapterForRelationalWithDuckDBExecution_Function_1__X_o_;
  
// runs the PCT "testTimeBucketSeconds" against DuckDb (eval on DuckDb)
meta::pure::functions::date::tests::testTimeBucketSeconds($duckdbadapter);
```

##### Example Target SQL wiring for timeBucket native function
```Java
// PureToDuckDb - this code was added in duckdbExtension.pure
dynaFnToSql('timeBucket',             $allStates,            ^ToSql(format='cast(time_bucket(%s) as timestamp_s)', transform={p:String[3] | constructIntervalFunction($p->at(2), $p->at(1)) + ', ' + $p->at(0) + ', ' + constructTimeBucketOffset($p->at(2))})),

// DuckDb uses a different origin for calculation of timebuckets; this offset helps to standardize toward unix epoch as origin and
// the offset for intervals < WEEK are set to align with Snowflake's methodology, as opposed to that which is outlined in DuckDb
// ref: https://github.com/duckdb/duckdb/blob/68bd4a5277430245e3d9edf1abbb9813520a3dff/extension/core_functions/scalar/date/time_bucket.cpp#L18
function meta::relational::functions::sqlQueryToString::duckDB::constructTimeBucketOffset(unit:String[1]):String[1]
{
  let unitWithoutQuotes = $unit->removeQuotesIfExist();
  let ISOMondayEpochOffset = 'timestamp \'1969-12-29 00:00:00\'';
  let EpochOffset = 'timestamp \'1970-01-01 00:00:00\'';

  let offset = [
      pair(DurationUnit.YEARS->toString(), $EpochOffset),
      pair(DurationUnit.MONTHS->toString(), $EpochOffset),
      pair(DurationUnit.WEEKS->toString(), $ISOMondayEpochOffset),
      pair(DurationUnit.DAYS->toString(), $EpochOffset),
      pair(DurationUnit.HOURS->toString(), $EpochOffset),
      pair(DurationUnit.MINUTES->toString(), $EpochOffset),
      pair(DurationUnit.SECONDS->toString(), $EpochOffset)
   ]->filter(p | $p.first == $unitWithoutQuotes).second->toOne('Unit not found: ' + $unitWithoutQuotes);
}

//------------------------
// PureToSnowflake - this code was added in snowflakeExtension.pure
dynaFnToSql('timeBucket',             $allStates,            ^ToSql(format='TIME_SLICE(%s)', transform={p:String[3]|$p->at(0) + ', ' + constructInterval($p->at(2), $p->at(1))})),

function meta::relational::functions::sqlQueryToString::snowflake::constructInterval(unit:String[1], i:String[1]):String[1]
{
   let unitWithoutQuotes = $unit->removeQuotesIfExist();

   let interval= [
      pair(DurationUnit.YEARS->toString(), '\'YEAR\''),
      pair(DurationUnit.MONTHS->toString(), '\'MONTH\''),
      pair(DurationUnit.WEEKS->toString(), '\'WEEK\''),
      pair(DurationUnit.DAYS->toString(), '\'DAY\''),
      pair(DurationUnit.HOURS->toString(), '\'HOUR\''),
      pair(DurationUnit.MINUTES->toString(), '\'MINUTE\''),
      pair(DurationUnit.SECONDS->toString(), '\'SECOND\'')
   ]->filter(p | $p.first == $unitWithoutQuotes).second->toOne('Unit not supported: ' + $unitWithoutQuotes);

   $i + ', ' + $interval;
}
```

###### Dev Envs: PureIDE (legend-engine) 

##### 3.ii. Native Function Registration in Handlers.java and other relevant files.
To find the places where you may need to wire in the function, you should Ctrl+Shift+F (IntelliJ) to see how similar functions were wired.

###### Dev Env: IntelliJ

##### 3.iii. Update ExpectedFailures of PCT Targets where you have not yet implemented the function.
In legend-engine, Ctrl+Shift+N (IntelliJ file-search) in IntelliJ for ```Test_*_PCT``` to find the relevant files of targets where you will need to register your expectedFailures.

You can build these modules individually to run the tests - avoid rebuilding the entire project.

###### Dev Env: IntelliJ

##### 3.iv. Leverage Adapters to easily run the PCT Tests written in the Native Function Development Loop against target environments.
You may need to loop between this step and earlier steps to improve what you wrote previously. Remember that if you are developing in legend-pure, ```TestFunction_TestHelper_Compiled.java``` and ```TestFunction_TestHelper_Interpreted.java``` enable you to run pure code without having to rebuild/restart PureIDE in legend-engine.

###### Dev Envs: PureIDE (legend-engine) or IntelliJ TestFunction_TestHelper_Interpreted.java (legend-pure)

-----------------
#### 4. FINAL Step: Preparing for PR
This should be the Final Step and should only happen Once. ***Maven builds are expensive and should be avoided until absolutely necessary.*** 
Run mvn clean install with tests in order to identify any potential tests that could fail due to your new module

##### Example command to build with threads
```
mvn clean install -T 3
```

#### Example PRs
##### New Native Function
[timeBucket](https://github.com/finos/legend-engine/pull/3491/files)

##### Conversion of Existing Function to PCT
<https://github.com/finos/legend-engine/pull/3424/files#diff-00c42b86368a6fcd15328a4041dbacdd70df22b3ecab95e3c75138af224c3f2e>

-------------------------

# Appendix
## Legend Platform Conventions
Conventions ensure that we can achieve **Goal - a clean (minimal) and transparent platform api**.

It is critical that utmost care is taken when deciding on:
* Function Signature
* Code Location
* Naming/Style

### Style
- One file per PCT Function
    - All Function Signatures for the PCT Function belong in the same file
    - All PCT tests for the PCT function belong in the same file
- package names are all lower-case
- function names are camelCase, with the first letter lower-case
- function signatures **must have docstring (doc.doc)**

### Practices
PCT measure the level of cross-target support for a given Platform Function. When contributing to PCT on Legend, keep this preference order in mind:

``` PCT Passed(Green) > Failed PCT with Good Error Message > Failed PCT ```

*One key priority is to improve error messages on the platform - Good Error Messages are important.*

Note: It is highly unlikely you will need to make changes to existing reference specs/implementations. If you feel the need, contact a CODEOWNER on your proposed change.






