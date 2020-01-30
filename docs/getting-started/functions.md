---
id: functions
title: Functions
---

## abs

**abs(int: Integer[1]): Integer[1]**

- Parameters
  - int: Integer[1]

- Returns
  - Integer[1]

- Usage
```
{|Person->getAll()
        ->project({p|$p.firstName}, 'firstName')
        ->groupBy('firstName', 'new'->agg({e|$e}, {y|$y->count()->abs()}))}
```

<br/>

**abs(float: Float[1]): Float[1]**

- Parameters
  - float: Float[1]

- Returns
  - Float[1]

<br/>

**abs(number: Number[1]): Number[1]**

- Parameters
  - number: Number[1]

- Returns
  - Number[1]

<br/>

## acos

**acos(number: Number[1]): Float[1]**

- Parameters
  - number: Number[1]

- Returns
  - Float[1]

<br/>

## adjust

**adjust(date: Date[1], number: Integer[1], unit: DurationUnit[1]): Date[1]**

- Parameters
  - date: Date[1]
  - number: Integer[1]
  - unit: DurationUnit[1]

- Returns
  - Date[1]

<br/>

## agg

**agg<T, V, U>(mapFn: FunctionDefinition<{T[1]->V[\*]}>[1], aggregateFn: FunctionDefinition<{V[\*]->U[0..1]}>[1]): AggregateValue<T,V,U>[1]**

- Parameters
  - mapFn: FunctionDefinition<{T[1]->V[\*]}>[1]
  - aggregateFn: FunctionDefinition<{V[\*]->U[0..1]}>[1]

- Returns
  - AggregateValue<T,V,U>[1]

<br/>

**agg<T, U>(name: String[1], mapFn: FunctionDefinition<{TDSRow[1]->T[0..1]}>[1], aggregateFn: FunctionDefinition<{T[\*]->U[1]}>[1]): AggregateValue<T,U>[1]**

Helper function to create / define an aggreagation value (combination of column name and aggregation function)

- Parameters
  - name: String[1]
  - mapFn: FunctionDefinition<{TDSRow[1]->T[0..1]}>[1]
  - aggregateFn: FunctionDefinition<{T[\*]->U[1]}>[1]

- Returns
  - AggregateValue<T,U>[1]

<br/>

## and

**and(vals: Boolean[\*]): Boolean[1]**

- Parameters
  - vals: Boolean[\*]

- Returns
  - Boolean[1]

<br/>

**and(first: Boolean[1], second: Boolean[1]): Boolean[1]**

- Parameters
  - first: Boolean[1]
  - second: Boolean[1]

- Returns
  - Boolean[1]

<br/>

## asc

**asc(column: String[1]): SortInformation[1]**

Helper function to create sort information with the specified column in ascending order

- Parameters
  - column: String[1]

- Returns
  - SortInformation[1]

<br/>

## asin

**asin(number: Number[1]): Float[1]**

- Parameters
  - number: Number[1]

- Returns
  - Float[1]

<br/>

## at

**at<T>(set: T[\*], key: Integer[1]): T[1]**

- Parameters
  - set: T[\*]
  - key: Integer[1]

- Returns
  - T[1]

<br/>

## atan

**atan(number: Number[1]): Float[1]**

- Parameters
  - number: Number[1]

- Returns
  - Float[1]

<br/>

## atan2

**atan2(number1: Number[1], number2: Number[1]): Float[1]**

- Parameters
  - number1: Number[1]
  - number2: Number[1]

- Returns
  - Float[1]

<br/>

## average

**average(numbers: Float[\*]): Float[1]**

- Parameters
  - numbers: Float[\*]

- Returns
  - Float[1]

<br/>

**average(numbers: Number[\*]): Float[1]**

- Parameters
  - numbers: Number[\*]

- Returns
  - Float[1]

<br/>

**average(numbers: Integer[\*]): Float[1]**

- Parameters
  - numbers: Integer[\*]

- Returns
  - Float[1]

<br/>

## averageRank

**averageRank(values: Any[\*]): Map<Any,Integer>[1]**

- Parameters
  - values: Any[\*]

- Returns
  - Map<Any,Integer>[1]

<br/>

## cast

**cast<T>(source: Any[m], object: T[1]): T[m]**

- Parameters
  - source: Any[m]
  - object: T[1]

- Returns
  - T[m]

<br/>

## ceiling

**ceiling(number: Number[1]): Integer[1]**

- Parameters
  - number: Number[1]

- Returns
  - Integer[1]

<br/>

## chunk

**chunk(source: String[1], val: Integer[1]): String[\*]**

- Parameters
  - source: String[1]
  - val: Integer[1]

- Returns
  - String[\*]

<br/>

## col

**col<T>(func: Function<{T[1]->Any[\*]}>[1], name: String[1], documentation: String[1]): BasicColumnSpecification<T>[1]**

Helper function to create a column specificantion based on the specified value function, column name and documentation for the column

- Parameters
  - func: Function<{T[1]->Any[\*]}>[1]
  - name: String[1]
  - documentation: String[1]

- Returns
  - BasicColumnSpecification<T>[1]

<br/>

**col<T>(func: Function<{T[1]->Any[\*]}>[1], name: String[1]): BasicColumnSpecification<T>[1]**

Helper function to create a column specificantion based on the specified value function and column name

- Parameters
  - func: Function<{T[1]->Any[\*]}>[1]
  - name: String[1]

- Returns
  - BasicColumnSpecification<T>[1]

<br/>

## columnProjectionsFromRoot

**columnProjectionsFromRoot(a: Any[\*], relation: NamedRelation[1], columnNames: String[\*], distinct: Boolean[0..1], limit: Integer[0..1]): RelationData[1]**

- Parameters
  - a: Any[\*]
  - relation: NamedRelation[1]
  - columnNames: String[\*]
  - distinct: Boolean[0..1]
  - limit: Integer[0..1]

- Returns
  - RelationData[1]

<br/>

## columnValueDifference

**columnValueDifference(tds1: TabularDataSet[1], tds2: TabularDataSet[1], tds1JoinColumns: String[1..\*], tds2JoinColumns: String[1..\*], columnValueDifferenceColumns: String[1..\*]): TabularDataSet[1]**

- Parameters
  - tds1: TabularDataSet[1]
  - tds2: TabularDataSet[1]
  - tds1JoinColumns: String[1..\*]
  - tds2JoinColumns: String[1..\*]
  - columnValueDifferenceColumns: String[1..\*]

- Returns
  - TabularDataSet[1]

<br/>

**columnValueDifference(tds1: TabularDataSet[1], tds2: TabularDataSet[1], joinColumns: String[1..\*], columnValueDifferenceColumns: String[1..\*]): TabularDataSet[1]**

- Parameters
  - tds1: TabularDataSet[1]
  - tds2: TabularDataSet[1]
  - joinColumns: String[1..\*]
  - columnValueDifferenceColumns: String[1..\*]

- Returns
  - TabularDataSet[1]

<br/>

## concatenate

**concatenate<T>(set1: T[\*], set2: T[\*]): T[\*]**

- Parameters
  - set1: T[\*]
  - set2: T[\*]

- Returns
  - T[\*]

<br/>

**concatenate(tds1: TabularDataSet[1], tds2: TabularDataSet[1]): TabularDataSet[1]**

Append the rows from the second TDS to the rows in the first TDS.  N.B. The column must be the same for the two input TDSs

- Parameters
  - tds1: TabularDataSet[1]
  - tds2: TabularDataSet[1]

- Returns
  - TabularDataSet[1]

<br/>

## contains

**contains(collection: Any[\*], value: Any[1]): Boolean[1]**

- Parameters
  - collection: Any[\*]
  - value: Any[1]

- Returns
  - Boolean[1]

<br/>

**contains(source: String[1], val: String[1]): Boolean[1]**

- Parameters
  - source: String[1]
  - val: String[1]

- Returns
  - Boolean[1]

<br/>

**contains(source: String[0..1], val: String[1]): Boolean[1]**

- Parameters
  - source: String[0..1]
  - val: String[1]

- Returns
  - Boolean[1]

<br/>

## containsAny

**containsAny(collection: Any[\*], values: Any[\*]): Boolean[1]**

- Parameters
  - collection: Any[\*]
  - values: Any[\*]

- Returns
  - Boolean[1]

<br/>

## cos

**cos(number: Number[1]): Float[1]**

- Parameters
  - number: Number[1]

- Returns
  - Float[1]

<br/>

## count

**count(s: Any[\*]): Integer[1]**

- Parameters
  - s: Any[\*]

- Returns
  - Integer[1]

<br/>

## date

**date(year: Integer[1]): Date[1]**

- Parameters
  - year: Integer[1]

- Returns
  - Date[1]

<br/>

**date(year: Integer[1], month: Integer[1]): Date[1]**

- Parameters
  - year: Integer[1]
  - month: Integer[1]

- Returns
  - Date[1]

<br/>

**date(year: Integer[1], month: Integer[1], day: Integer[1]): StrictDate[1]**

- Parameters
  - year: Integer[1]
  - month: Integer[1]
  - day: Integer[1]

- Returns
  - StrictDate[1]

<br/>

**date(year: Integer[1], month: Integer[1], day: Integer[1], hour: Integer[1]): DateTime[1]**

- Parameters
  - year: Integer[1]
  - month: Integer[1]
  - day: Integer[1]
  - hour: Integer[1]

- Returns
  - DateTime[1]

<br/>

**date(year: Integer[1], month: Integer[1], day: Integer[1], hour: Integer[1], minute: Integer[1]): DateTime[1]**

- Parameters
  - year: Integer[1]
  - month: Integer[1]
  - day: Integer[1]
  - hour: Integer[1]
  - minute: Integer[1]

- Returns
  - DateTime[1]

<br/>

**date(year: Integer[1], month: Integer[1], day: Integer[1], hour: Integer[1], minute: Integer[1], second: Number[1]): DateTime[1]**

- Parameters
  - year: Integer[1]
  - month: Integer[1]
  - day: Integer[1]
  - hour: Integer[1]
  - minute: Integer[1]
  - second: Number[1]

- Returns
  - DateTime[1]

<br/>

## dateDiff

**dateDiff(d1: Date[1], d2: Date[1], du: DurationUnit[1]): Integer[1]**

- Parameters
  - d1: Date[1]
  - d2: Date[1]
  - du: DurationUnit[1]

- Returns
  - Integer[1]

<br/>

**dateDiff(d1: Date[0..1], d2: Date[0..1], du: DurationUnit[1]): Integer[0..1]**

- Parameters
  - d1: Date[0..1]
  - d2: Date[0..1]
  - du: DurationUnit[1]

- Returns
  - Integer[0..1]

<br/>

## datePart

**datePart(d: Date[1]): Date[1]**

- Parameters
  - d: Date[1]

- Returns
  - Date[1]

<br/>

**datePart(d: Date[0..1]): Date[0..1]**

- Parameters
  - d: Date[0..1]

- Returns
  - Date[0..1]

<br/>

## dayOfMonth

**dayOfMonth(d: Date[1]): Integer[1]**

- Parameters
  - d: Date[1]

- Returns
  - Integer[1]

<br/>

## dayOfWeek

**dayOfWeek(d: Date[1]): DayOfWeek[1]**

- Parameters
  - d: Date[1]

- Returns
  - DayOfWeek[1]

<br/>

**dayOfWeek(number: Integer[1]): DayOfWeek[1]**

- Parameters
  - number: Integer[1]

- Returns
  - DayOfWeek[1]

<br/>

## dayOfWeekNumber

**dayOfWeekNumber(d: Date[1]): Integer[1]**

- Parameters
  - d: Date[1]

- Returns
  - Integer[1]

<br/>

## daysOfMonth

**daysOfMonth(date: Date[1]): Integer[\*]**

- Parameters
  - date: Date[1]

- Returns
  - Integer[\*]

<br/>

## deepFetchGetAll

**deepFetchGetAll<T>(type: Class<T>[1], dfTT: DeepFetchTempTable[1]): T[\*]**

- Parameters
  - type: Class<T>[1]
  - dfTT: DeepFetchTempTable[1]

- Returns
  - T[\*]

<br/>

## denseRank

**denseRank(values: Any[\*]): Map<Any,Integer>[1]**

- Parameters
  - values: Any[\*]

- Returns
  - Map<Any,Integer>[1]

<br/>

## desc

**desc(column: String[1]): SortInformation[1]**

Helper function to create sort information with the specified column in descending order

- Parameters
  - column: String[1]

- Returns
  - SortInformation[1]

<br/>

## distanceHaversineDegrees

**distanceHaversineDegrees(lat1Degrees: Number[1], lon1Degrees: Number[1], lat2Degrees: Number[1], lon2Degrees: Number[1]): Number[1]**

- Parameters
  - lat1Degrees: Number[1]
  - lon1Degrees: Number[1]
  - lat2Degrees: Number[1]
  - lon2Degrees: Number[1]

- Returns
  - Number[1]

<br/>

## distanceHaversineRadians

**distanceHaversineRadians(lat1Radians: Number[1], lon1Radians: Number[1], lat2Radians: Number[1], lon2Radians: Number[1]): Number[1]**

- Parameters
  - lat1Radians: Number[1]
  - lon1Radians: Number[1]
  - lat2Radians: Number[1]
  - lon2Radians: Number[1]

- Returns
  - Number[1]

<br/>

## distanceSphericalLawOfCosinesDegrees

**distanceSphericalLawOfCosinesDegrees(lat1Degrees: Number[1], lon1Degrees: Number[1], lat2Degrees: Number[1], lon2Degrees: Number[1]): Number[1]**

- Parameters
  - lat1Degrees: Number[1]
  - lon1Degrees: Number[1]
  - lat2Degrees: Number[1]
  - lon2Degrees: Number[1]

- Returns
  - Number[1]

<br/>

## distanceSphericalLawOfCosinesRadians

**distanceSphericalLawOfCosinesRadians(lat1Radians: Number[1], lon1Radians: Number[1], lat2Radians: Number[1], lon2Radians: Number[1]): Number[1]**

- Parameters
  - lat1Radians: Number[1]
  - lon1Radians: Number[1]
  - lat2Radians: Number[1]
  - lon2Radians: Number[1]

- Returns
  - Number[1]

<br/>

## distinct

**distinct<T>(s: T[\*]): T[\*]**

- Parameters
  - s: T[\*]

- Returns
  - T[\*]

<br/>

**distinct(tds: TabularDataSet[1]): TabularDataSet[1]**

Remove duplicate rows from the priovded TDS

- Parameters
  - tds: TabularDataSet[1]

- Returns
  - TabularDataSet[1]

<br/>

## divide

**divide(left: Number[1], right: Number[1]): Float[1]**

- Parameters
  - left: Number[1]
  - right: Number[1]

- Returns
  - Float[1]

<br/>

## drop

**drop<T>(set: T[\*], count: Integer[1]): T[\*]**

- Parameters
  - set: T[\*]
  - count: Integer[1]

- Returns
  - T[\*]

<br/>

**drop(tds: TabularDataSet[1], size: Integer[1]): TabularDataSet[1]**

Reduce the number of rows in the provided TDS, dropping the first set of rows based on the specified size

- Parameters
  - tds: TabularDataSet[1]
  - size: Integer[1]

- Returns
  - TabularDataSet[1]

<br/>

## earthRadius

**earthRadius(): Float[1]**

Earth radius in km

- Parameters


- Returns
  - Float[1]

<br/>

## endsWith

**endsWith(source: String[1], val: String[1]): Boolean[1]**

- Parameters
  - source: String[1]
  - val: String[1]

- Returns
  - Boolean[1]

<br/>

**endsWith(source: String[0..1], val: String[1]): Boolean[1]**

- Parameters
  - source: String[0..1]
  - val: String[1]

- Returns
  - Boolean[1]

<br/>

## enumValues

**enumValues<T>(enum: Enumeration<T>[1]): T[\*]**

- Parameters
  - enum: Enumeration<T>[1]

- Returns
  - T[\*]

<br/>

## eq

**eq(left: Any[1], right: Any[1]): Boolean[1]**

- Parameters
  - left: Any[1]
  - right: Any[1]

- Returns
  - Boolean[1]

<br/>

## equal

**equal(left: Any[\*], right: Any[\*]): Boolean[1]**

- Parameters
  - left: Any[\*]
  - right: Any[\*]

- Returns
  - Boolean[1]

<br/>

## equalIgnoreCase

**equalIgnoreCase(string1: String[1], string2: String[1]): Boolean[1]**

Returns true if the two strings are equal, ignoring case.

- Parameters
  - string1: String[1]
  - string2: String[1]

- Returns
  - Boolean[1]

<br/>

## eval

**eval<V>(func: Function<{->V[m]}>[1]): V[m]**

- Parameters
  - func: Function<{->V[m]}>[1]

- Returns
  - V[m]

<br/>

**eval<T, V>(func: Function<{T[n]->V[m]}>[1], param: T[n]): V[m]**

- Parameters
  - func: Function<{T[n]->V[m]}>[1]
  - param: T[n]

- Returns
  - V[m]

<br/>

## exists

**exists<T>(value: T[\*], func: Function<{T[1]->Boolean[1]}>[1]): Boolean[1]**

- Parameters
  - value: T[\*]
  - func: Function<{T[1]->Boolean[1]}>[1]

- Returns
  - Boolean[1]

<br/>

## exp

**exp(exponent: Number[1]): Float[1]**

- Parameters
  - exponent: Number[1]

- Returns
  - Float[1]

<br/>

## extend

**extend(tds: TabularDataSet[1], newColumnFunctions: BasicColumnSpecification<TDSRow>[\*]): TabularDataSet[1]**

Add additional new calculated columns to the provided TDS

- Parameters
  - tds: TabularDataSet[1]
  - newColumnFunctions: BasicColumnSpecification<TDSRow>[\*]

- Returns
  - TabularDataSet[1]

<br/>

## extractEnumValue

**extractEnumValue<T>(enum: Enumeration<T>[1], value: String[1]): T[1]**

- Parameters
  - enum: Enumeration<T>[1]
  - value: String[1]

- Returns
  - T[1]

<br/>

## filter

**filter<T>(value: T[\*], func: Function<{T[1]->Boolean[1]}>[1]): T[\*]**

- Parameters
  - value: T[\*]
  - func: Function<{T[1]->Boolean[1]}>[1]

- Returns
  - T[\*]

<br/>

**filter(tds: TabularDataSet[1], f: Function<{TDSRow[1]->Boolean[1]}>[1]): TabularDataSet[1]**

Reduce the number of rows in the provided TDS, selecting the set of rows that match the provided filter function

- Parameters
  - tds: TabularDataSet[1]
  - f: Function<{TDSRow[1]->Boolean[1]}>[1]

- Returns
  - TabularDataSet[1]

<br/>

## first

**first<T>(set: T[\*]): T[0..1]**

- Parameters
  - set: T[\*]

- Returns
  - T[0..1]

<br/>

## firstDayOfMonth

**firstDayOfMonth(date: Date[1]): Date[1]**

- Parameters
  - date: Date[1]

- Returns
  - Date[1]

<br/>

## firstDayOfQuarter

**firstDayOfQuarter(date: Date[1]): StrictDate[1]**

- Parameters
  - date: Date[1]

- Returns
  - StrictDate[1]

<br/>

## firstDayOfThisMonth

**firstDayOfThisMonth(): Date[1]**

- Parameters


- Returns
  - Date[1]

<br/>

## firstDayOfThisQuarter

**firstDayOfThisQuarter(): StrictDate[1]**

- Parameters


- Returns
  - StrictDate[1]

<br/>

## firstDayOfThisWeek

**firstDayOfThisWeek(): Date[1]**

- Parameters


- Returns
  - Date[1]

<br/>

## firstDayOfThisYear

**firstDayOfThisYear(): Date[1]**

- Parameters


- Returns
  - Date[1]

<br/>

## firstDayOfWeek

**firstDayOfWeek(date: Date[1]): Date[1]**

- Parameters
  - date: Date[1]

- Returns
  - Date[1]

<br/>

## firstDayOfYear

**firstDayOfYear(date: Date[1]): Date[1]**

- Parameters
  - date: Date[1]

- Returns
  - Date[1]

<br/>

## floor

**floor(number: Number[1]): Integer[1]**

- Parameters
  - number: Number[1]

- Returns
  - Integer[1]

<br/>

## format

**format(format: String[1], args: Any[\*]): String[1]**

- Parameters
  - format: String[1]
  - args: Any[\*]

- Returns
  - String[1]

<br/>

## from

**from(tds: TabularDataSet[1], mapping: Mapping[1], runtime: Runtime[1]): TabularDataSet[1]**

- Parameters
  - tds: TabularDataSet[1]
  - mapping: Mapping[1]
  - runtime: Runtime[1]

- Returns
  - TabularDataSet[1]

<br/>

## getAll

**getAll<T>(type: Class<T>[1]): T[\*]**

- Parameters
  - type: Class<T>[1]

- Returns
  - T[\*]

<br/>

**getAll<T>(type: Class<T>[1], milestoningDate: Date[1]): T[\*]**

- Parameters
  - type: Class<T>[1]
  - milestoningDate: Date[1]

- Returns
  - T[\*]

<br/>

**getAll<T>(type: Class<T>[1], processingDate: Date[1], businessDate: Date[1]): T[\*]**

- Parameters
  - type: Class<T>[1]
  - processingDate: Date[1]
  - businessDate: Date[1]

- Returns
  - T[\*]

<br/>

## getAllVersions

**getAllVersions<T>(type: Class<T>[1]): T[\*]**

- Parameters
  - type: Class<T>[1]

- Returns
  - T[\*]

<br/>

## getAllVersionsInRange

**getAllVersionsInRange<T>(type: Class<T>[1], start: Date[1], end: Date[1]): T[\*]**

- Parameters
  - type: Class<T>[1]
  - start: Date[1]
  - end: Date[1]

- Returns
  - T[\*]

<br/>

## graphFetch

**graphFetch<T>(collection: T[\*], graphFetchTree: RootGraphFetchTree<T>[1]): T[\*]**

- Parameters
  - collection: T[\*]
  - graphFetchTree: RootGraphFetchTree<T>[1]

- Returns
  - T[\*]

<br/>

**graphFetch<T>(collection: T[\*], graphFetchTree: RootGraphFetchTree<T>[1], batchSize: Integer[1]): T[\*]**

- Parameters
  - collection: T[\*]
  - graphFetchTree: RootGraphFetchTree<T>[1]
  - batchSize: Integer[1]

- Returns
  - T[\*]

<br/>

## graphFetchChecked

**graphFetchChecked<T>(collection: T[\*], graphFetchTree: RootGraphFetchTree<T>[1]): Checked<T>[\*]**

- Parameters
  - collection: T[\*]
  - graphFetchTree: RootGraphFetchTree<T>[1]

- Returns
  - Checked<T>[\*]

<br/>

## greaterThan

**greaterThan(left: Number[1], right: Number[1]): Boolean[1]**

- Parameters
  - left: Number[1]
  - right: Number[1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: String[1], right: String[1]): Boolean[1]**

- Parameters
  - left: String[1]
  - right: String[1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: Date[1], right: Date[1]): Boolean[1]**

- Parameters
  - left: Date[1]
  - right: Date[1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: Boolean[1], right: Boolean[1]): Boolean[1]**

- Parameters
  - left: Boolean[1]
  - right: Boolean[1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: Boolean[1], right: Boolean[0..1]): Boolean[1]**

- Parameters
  - left: Boolean[1]
  - right: Boolean[0..1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: Boolean[0..1], right: Boolean[1]): Boolean[1]**

- Parameters
  - left: Boolean[0..1]
  - right: Boolean[1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: Boolean[0..1], right: Boolean[0..1]): Boolean[1]**

- Parameters
  - left: Boolean[0..1]
  - right: Boolean[0..1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: Date[1], right: Date[0..1]): Boolean[1]**

- Parameters
  - left: Date[1]
  - right: Date[0..1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: Date[0..1], right: Date[1]): Boolean[1]**

- Parameters
  - left: Date[0..1]
  - right: Date[1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: Date[0..1], right: Date[0..1]): Boolean[1]**

- Parameters
  - left: Date[0..1]
  - right: Date[0..1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: Number[1], right: Number[0..1]): Boolean[1]**

- Parameters
  - left: Number[1]
  - right: Number[0..1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: Number[0..1], right: Number[1]): Boolean[1]**

- Parameters
  - left: Number[0..1]
  - right: Number[1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: Number[0..1], right: Number[0..1]): Boolean[1]**

- Parameters
  - left: Number[0..1]
  - right: Number[0..1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: String[1], right: String[0..1]): Boolean[1]**

- Parameters
  - left: String[1]
  - right: String[0..1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: String[0..1], right: String[1]): Boolean[1]**

- Parameters
  - left: String[0..1]
  - right: String[1]

- Returns
  - Boolean[1]

<br/>

**greaterThan(left: String[0..1], right: String[0..1]): Boolean[1]**

- Parameters
  - left: String[0..1]
  - right: String[0..1]

- Returns
  - Boolean[1]

<br/>

## greaterThanEqual

**greaterThanEqual(left: Number[1], right: Number[1]): Boolean[1]**

- Parameters
  - left: Number[1]
  - right: Number[1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: Date[1], right: Date[1]): Boolean[1]**

- Parameters
  - left: Date[1]
  - right: Date[1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: String[1], right: String[1]): Boolean[1]**

- Parameters
  - left: String[1]
  - right: String[1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: Boolean[1], right: Boolean[1]): Boolean[1]**

- Parameters
  - left: Boolean[1]
  - right: Boolean[1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: Boolean[1], right: Boolean[0..1]): Boolean[1]**

- Parameters
  - left: Boolean[1]
  - right: Boolean[0..1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: Boolean[0..1], right: Boolean[1]): Boolean[1]**

- Parameters
  - left: Boolean[0..1]
  - right: Boolean[1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: Boolean[0..1], right: Boolean[0..1]): Boolean[1]**

- Parameters
  - left: Boolean[0..1]
  - right: Boolean[0..1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: Date[1], right: Date[0..1]): Boolean[1]**

- Parameters
  - left: Date[1]
  - right: Date[0..1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: Date[0..1], right: Date[1]): Boolean[1]**

- Parameters
  - left: Date[0..1]
  - right: Date[1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: Date[0..1], right: Date[0..1]): Boolean[1]**

- Parameters
  - left: Date[0..1]
  - right: Date[0..1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: Number[1], right: Number[0..1]): Boolean[1]**

- Parameters
  - left: Number[1]
  - right: Number[0..1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: Number[0..1], right: Number[1]): Boolean[1]**

- Parameters
  - left: Number[0..1]
  - right: Number[1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: Number[0..1], right: Number[0..1]): Boolean[1]**

- Parameters
  - left: Number[0..1]
  - right: Number[0..1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: String[1], right: String[0..1]): Boolean[1]**

- Parameters
  - left: String[1]
  - right: String[0..1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: String[0..1], right: String[1]): Boolean[1]**

- Parameters
  - left: String[0..1]
  - right: String[1]

- Returns
  - Boolean[1]

<br/>

**greaterThanEqual(left: String[0..1], right: String[0..1]): Boolean[1]**

- Parameters
  - left: String[0..1]
  - right: String[0..1]

- Returns
  - Boolean[1]

<br/>

## groupBy

**groupBy<K, V, U>(set: K[\*], functions: Function<{K[1]->Any[\*]}>[\*], aggValues: AggregateValue<K,V,U>[\*], ids: String[\*]): TabularDataSet[1]**

- Parameters
  - set: K[\*]
  - functions: Function<{K[1]->Any[\*]}>[\*]
  - aggValues: AggregateValue<K,V,U>[\*]
  - ids: String[\*]

- Returns
  - TabularDataSet[1]

<br/>

**groupBy<T, U>(tds: TabularDataSet[1], columns: String[\*], aggValues: AggregateValue<T,U>[\*]): TabularDataSet[1]**

Aggregate the data within the provided TDS using the specified groupings and aggregation functions

- Parameters
  - tds: TabularDataSet[1]
  - columns: String[\*]
  - aggValues: AggregateValue<T,U>[\*]

- Returns
  - TabularDataSet[1]

- Usage
```
{|Person->getAll()
        ->project({p|$p.firstName}, 'firstName')
        ->groupBy('firstName', 'new'->agg({e|$e}, {y|$y->count()}))}
```

<br/>

## groupByWithWindowSubset

**groupByWithWindowSubset<K, V, U>(set: K[\*], functions: Function<{K[1]->Any[\*]}>[\*], aggValues: AggregateValue<K,V,U>[\*], ids: String[\*], subSelectIds: String[\*], subAggIds: String[\*]): TabularDataSet[1]**

- Parameters
  - set: K[\*]
  - functions: Function<{K[1]->Any[\*]}>[\*]
  - aggValues: AggregateValue<K,V,U>[\*]
  - ids: String[\*]
  - subSelectIds: String[\*]
  - subAggIds: String[\*]

- Returns
  - TabularDataSet[1]

<br/>

## hasDay

**hasDay(d: Date[1]): Boolean[1]**

- Parameters
  - d: Date[1]

- Returns
  - Boolean[1]

<br/>

## hasHour

**hasHour(d: Date[1]): Boolean[1]**

- Parameters
  - d: Date[1]

- Returns
  - Boolean[1]

<br/>

## hasMinute

**hasMinute(d: Date[1]): Boolean[1]**

- Parameters
  - d: Date[1]

- Returns
  - Boolean[1]

<br/>

## hasMonth

**hasMonth(d: Date[1]): Boolean[1]**

- Parameters
  - d: Date[1]

- Returns
  - Boolean[1]

<br/>

## hasSecond

**hasSecond(d: Date[1]): Boolean[1]**

- Parameters
  - d: Date[1]

- Returns
  - Boolean[1]

<br/>

## hasSubsecond

**hasSubsecond(d: Date[1]): Boolean[1]**

- Parameters
  - d: Date[1]

- Returns
  - Boolean[1]

<br/>

## hasSubsecondWithAtLeastPrecision

**hasSubsecondWithAtLeastPrecision(d: Date[1], minPrecision: Integer[1]): Boolean[1]**

- Parameters
  - d: Date[1]
  - minPrecision: Integer[1]

- Returns
  - Boolean[1]

<br/>

## hasYear

**hasYear(d: Date[1]): Boolean[1]**

- Parameters
  - d: Date[1]

- Returns
  - Boolean[1]

<br/>

## hour

**hour(d: Date[1]): Integer[1]**

- Parameters
  - d: Date[1]

- Returns
  - Integer[1]

<br/>

## humanize

**humanize(str: String[1]): String[1]**

Un-camel case / humanize the provided string using provided TLA / acronym overrides

- Parameters
  - str: String[1]

- Returns
  - String[1]

<br/>

## if

**if<T>(test: Boolean[1], valid: Function<{->T[m]}>[1], invalid: Function<{->T[m]}>[1]): T[m]**

- Parameters
  - test: Boolean[1]
  - valid: Function<{->T[m]}>[1]
  - invalid: Function<{->T[m]}>[1]

- Returns
  - T[m]

<br/>

## in

**in(value: Any[0..1], collection: Any[\*]): Boolean[1]**

- Parameters
  - value: Any[0..1]
  - collection: Any[\*]

- Returns
  - Boolean[1]

<br/>

**in(value: Any[1], collection: Any[\*]): Boolean[1]**

- Parameters
  - value: Any[1]
  - collection: Any[\*]

- Returns
  - Boolean[1]

<br/>

## indexOf

**indexOf<T>(set: T[\*], value: T[1]): Integer[1]**

- Parameters
  - set: T[\*]
  - value: T[1]

- Returns
  - Integer[1]

<br/>

**indexOf(str: String[1], toFind: String[1]): Integer[1]**

- Parameters
  - str: String[1]
  - toFind: String[1]

- Returns
  - Integer[1]

<br/>

**indexOf(str: String[1], toFind: String[1], fromIndex: Integer[1]): Integer[1]**

- Parameters
  - str: String[1]
  - toFind: String[1]
  - fromIndex: Integer[1]

- Returns
  - Integer[1]

<br/>

## is

**is(left: Any[1], right: Any[1]): Boolean[1]**

- Parameters
  - left: Any[1]
  - right: Any[1]

- Returns
  - Boolean[1]

<br/>

## isAfterDay

**isAfterDay(d1: Date[1], d2: Date[1]): Boolean[1]**

- Parameters
  - d1: Date[1]
  - d2: Date[1]

- Returns
  - Boolean[1]

<br/>

**isAfterDay(d1: Date[0..1], d2: Date[1]): Boolean[1]**

- Parameters
  - d1: Date[0..1]
  - d2: Date[1]

- Returns
  - Boolean[1]

<br/>

**isAfterDay(d1: Date[1], d2: Date[0..1]): Boolean[1]**

- Parameters
  - d1: Date[1]
  - d2: Date[0..1]

- Returns
  - Boolean[1]

<br/>

**isAfterDay(d1: Date[0..1], d2: Date[0..1]): Boolean[1]**

- Parameters
  - d1: Date[0..1]
  - d2: Date[0..1]

- Returns
  - Boolean[1]

<br/>

## isBeforeDay

**isBeforeDay(d1: Date[1], d2: Date[1]): Boolean[1]**

- Parameters
  - d1: Date[1]
  - d2: Date[1]

- Returns
  - Boolean[1]

<br/>

**isBeforeDay(d1: Date[0..1], d2: Date[1]): Boolean[1]**

- Parameters
  - d1: Date[0..1]
  - d2: Date[1]

- Returns
  - Boolean[1]

<br/>

**isBeforeDay(d1: Date[1], d2: Date[0..1]): Boolean[1]**

- Parameters
  - d1: Date[1]
  - d2: Date[0..1]

- Returns
  - Boolean[1]

<br/>

**isBeforeDay(d1: Date[0..1], d2: Date[0..1]): Boolean[1]**

- Parameters
  - d1: Date[0..1]
  - d2: Date[0..1]

- Returns
  - Boolean[1]

<br/>

## isEmpty

**isEmpty(p: Any[\*]): Boolean[1]**

- Parameters
  - p: Any[\*]

- Returns
  - Boolean[1]

<br/>

**isEmpty(p: Any[0..1]): Boolean[1]**

- Parameters
  - p: Any[0..1]

- Returns
  - Boolean[1]

<br/>

## isFalse

**isFalse(value: Boolean[0..1]): Boolean[1]**

- Parameters
  - value: Boolean[0..1]

- Returns
  - Boolean[1]

<br/>

## isLowerCase

**isLowerCase(source: String[1]): Boolean[1]**

Returns true if the string is lower case

- Parameters
  - source: String[1]

- Returns
  - Boolean[1]

<br/>

## isNotEmpty

**isNotEmpty(p: Any[\*]): Boolean[1]**

- Parameters
  - p: Any[\*]

- Returns
  - Boolean[1]

<br/>

**isNotEmpty(p: Any[0..1]): Boolean[1]**

- Parameters
  - p: Any[0..1]

- Returns
  - Boolean[1]

<br/>

## isOnDay

**isOnDay(d1: Date[1], d2: Date[1]): Boolean[1]**

- Parameters
  - d1: Date[1]
  - d2: Date[1]

- Returns
  - Boolean[1]

<br/>

**isOnDay(d1: Date[0..1], d2: Date[1]): Boolean[1]**

- Parameters
  - d1: Date[0..1]
  - d2: Date[1]

- Returns
  - Boolean[1]

<br/>

**isOnDay(d1: Date[1], d2: Date[0..1]): Boolean[1]**

- Parameters
  - d1: Date[1]
  - d2: Date[0..1]

- Returns
  - Boolean[1]

<br/>

**isOnDay(d1: Date[0..1], d2: Date[0..1]): Boolean[1]**

- Parameters
  - d1: Date[0..1]
  - d2: Date[0..1]

- Returns
  - Boolean[1]

<br/>

## isOnOrAfterDay

**isOnOrAfterDay(d1: Date[1], d2: Date[1]): Boolean[1]**

- Parameters
  - d1: Date[1]
  - d2: Date[1]

- Returns
  - Boolean[1]

<br/>

**isOnOrAfterDay(d1: Date[0..1], d2: Date[1]): Boolean[1]**

- Parameters
  - d1: Date[0..1]
  - d2: Date[1]

- Returns
  - Boolean[1]

<br/>

**isOnOrAfterDay(d1: Date[1], d2: Date[0..1]): Boolean[1]**

- Parameters
  - d1: Date[1]
  - d2: Date[0..1]

- Returns
  - Boolean[1]

<br/>

**isOnOrAfterDay(d1: Date[0..1], d2: Date[0..1]): Boolean[1]**

- Parameters
  - d1: Date[0..1]
  - d2: Date[0..1]

- Returns
  - Boolean[1]

<br/>

## isOnOrBeforeDay

**isOnOrBeforeDay(d1: Date[1], d2: Date[1]): Boolean[1]**

- Parameters
  - d1: Date[1]
  - d2: Date[1]

- Returns
  - Boolean[1]

<br/>

**isOnOrBeforeDay(d1: Date[0..1], d2: Date[1]): Boolean[1]**

- Parameters
  - d1: Date[0..1]
  - d2: Date[1]

- Returns
  - Boolean[1]

<br/>

**isOnOrBeforeDay(d1: Date[1], d2: Date[0..1]): Boolean[1]**

- Parameters
  - d1: Date[1]
  - d2: Date[0..1]

- Returns
  - Boolean[1]

<br/>

**isOnOrBeforeDay(d1: Date[0..1], d2: Date[0..1]): Boolean[1]**

- Parameters
  - d1: Date[0..1]
  - d2: Date[0..1]

- Returns
  - Boolean[1]

<br/>

## isTrue

**isTrue(value: Boolean[0..1]): Boolean[1]**

- Parameters
  - value: Boolean[0..1]

- Returns
  - Boolean[1]

<br/>

## isUpperCase

**isUpperCase(source: String[1]): Boolean[1]**

Returns true if the string is upper case

- Parameters
  - source: String[1]

- Returns
  - Boolean[1]

<br/>

## join

**join(tds1: TabularDataSet[1], tds2: TabularDataSet[1], type: JoinType[1], joinCondition: Function<{TDSRow[1],TDSRow[1]->Boolean[1]}>[1]): TabularDataSet[1]**

Join the two provided TDSs using the specified join type and condition

- Parameters
  - tds1: TabularDataSet[1]
  - tds2: TabularDataSet[1]
  - type: JoinType[1]
  - joinCondition: Function<{TDSRow[1],TDSRow[1]->Boolean[1]}>[1]

- Returns
  - TabularDataSet[1]

<br/>

**join(leftTds: TabularDataSet[1], rightTds: TabularDataSet[1], type: JoinType[1], leftTdsCols: String[1..\*], rightTdsCols: String[1..\*]): TabularDataSet[1]**

Join the two provided TDSs using the specified join type using the specified columns as keys

- Parameters
  - leftTds: TabularDataSet[1]
  - rightTds: TabularDataSet[1]
  - type: JoinType[1]
  - leftTdsCols: String[1..\*]
  - rightTdsCols: String[1..\*]

- Returns
  - TabularDataSet[1]

<br/>

**join(tds1: TabularDataSet[1], tds2: TabularDataSet[1], type: JoinType[1], tdsCols: String[1..\*]): TabularDataSet[1]**

Join the two provided TDSs using the specified join type using the specified columns as keys

- Parameters
  - tds1: TabularDataSet[1]
  - tds2: TabularDataSet[1]
  - type: JoinType[1]
  - tdsCols: String[1..\*]

- Returns
  - TabularDataSet[1]

<br/>

## joinStrings

**joinStrings(strings: String[\*], separator: String[1]): String[1]**

- Parameters
  - strings: String[\*]
  - separator: String[1]

- Returns
  - String[1]

- Usage
```
{|Firm->getAll()
      ->groupBy({f|$f.legalName}, 
              {x|$x.employees->map({v_automap|$v_automap.firstName})}
			  ->agg({y|$y->joinStrings('\*')}), ['legalName', 'employeesFirstName'])}
```

<br/>

**joinStrings(strings: String[\*], prefix: String[1], separator: String[1], suffix: String[1]): String[1]**

- Parameters
  - strings: String[\*]
  - prefix: String[1]
  - separator: String[1]
  - suffix: String[1]

- Returns
  - String[1]

<br/>

**joinStrings(strings: String[\*]): String[1]**

- Parameters
  - strings: String[\*]

- Returns
  - String[1]

<br/>

## last

**last<T>(set: T[\*]): T[0..1]**

- Parameters
  - set: T[\*]

- Returns
  - T[0..1]

<br/>

## lastIndexOf

**lastIndexOf(str: String[1], value: String[1]): Integer[1]**

- Parameters
  - str: String[1]
  - value: String[1]

- Returns
  - Integer[1]

<br/>

## length

**length(str: String[1]): Integer[1]**

- Parameters
  - str: String[1]

- Returns
  - Integer[1]

<br/>

## lessThan

**lessThan(left: Date[1], right: Date[1]): Boolean[1]**

- Parameters
  - left: Date[1]
  - right: Date[1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: Number[1], right: Number[1]): Boolean[1]**

- Parameters
  - left: Number[1]
  - right: Number[1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: String[1], right: String[1]): Boolean[1]**

- Parameters
  - left: String[1]
  - right: String[1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: Boolean[1], right: Boolean[1]): Boolean[1]**

- Parameters
  - left: Boolean[1]
  - right: Boolean[1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: Boolean[1], right: Boolean[0..1]): Boolean[1]**

- Parameters
  - left: Boolean[1]
  - right: Boolean[0..1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: Boolean[0..1], right: Boolean[1]): Boolean[1]**

- Parameters
  - left: Boolean[0..1]
  - right: Boolean[1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: Boolean[0..1], right: Boolean[0..1]): Boolean[1]**

- Parameters
  - left: Boolean[0..1]
  - right: Boolean[0..1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: Date[1], right: Date[0..1]): Boolean[1]**

- Parameters
  - left: Date[1]
  - right: Date[0..1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: Date[0..1], right: Date[1]): Boolean[1]**

- Parameters
  - left: Date[0..1]
  - right: Date[1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: Date[0..1], right: Date[0..1]): Boolean[1]**

- Parameters
  - left: Date[0..1]
  - right: Date[0..1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: Number[1], right: Number[0..1]): Boolean[1]**

- Parameters
  - left: Number[1]
  - right: Number[0..1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: Number[0..1], right: Number[1]): Boolean[1]**

- Parameters
  - left: Number[0..1]
  - right: Number[1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: Number[0..1], right: Number[0..1]): Boolean[1]**

- Parameters
  - left: Number[0..1]
  - right: Number[0..1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: String[1], right: String[0..1]): Boolean[1]**

- Parameters
  - left: String[1]
  - right: String[0..1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: String[0..1], right: String[1]): Boolean[1]**

- Parameters
  - left: String[0..1]
  - right: String[1]

- Returns
  - Boolean[1]

<br/>

**lessThan(left: String[0..1], right: String[0..1]): Boolean[1]**

- Parameters
  - left: String[0..1]
  - right: String[0..1]

- Returns
  - Boolean[1]

<br/>

## lessThanEqual

**lessThanEqual(left: String[1], right: String[1]): Boolean[1]**

- Parameters
  - left: String[1]
  - right: String[1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: Date[1], right: Date[1]): Boolean[1]**

- Parameters
  - left: Date[1]
  - right: Date[1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: Number[1], right: Number[1]): Boolean[1]**

- Parameters
  - left: Number[1]
  - right: Number[1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: Boolean[1], right: Boolean[1]): Boolean[1]**

- Parameters
  - left: Boolean[1]
  - right: Boolean[1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: Boolean[1], right: Boolean[0..1]): Boolean[1]**

- Parameters
  - left: Boolean[1]
  - right: Boolean[0..1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: Boolean[0..1], right: Boolean[1]): Boolean[1]**

- Parameters
  - left: Boolean[0..1]
  - right: Boolean[1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: Boolean[0..1], right: Boolean[0..1]): Boolean[1]**

- Parameters
  - left: Boolean[0..1]
  - right: Boolean[0..1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: Date[1], right: Date[0..1]): Boolean[1]**

- Parameters
  - left: Date[1]
  - right: Date[0..1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: Date[0..1], right: Date[1]): Boolean[1]**

- Parameters
  - left: Date[0..1]
  - right: Date[1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: Date[0..1], right: Date[0..1]): Boolean[1]**

- Parameters
  - left: Date[0..1]
  - right: Date[0..1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: Number[1], right: Number[0..1]): Boolean[1]**

- Parameters
  - left: Number[1]
  - right: Number[0..1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: Number[0..1], right: Number[1]): Boolean[1]**

- Parameters
  - left: Number[0..1]
  - right: Number[1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: Number[0..1], right: Number[0..1]): Boolean[1]**

- Parameters
  - left: Number[0..1]
  - right: Number[0..1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: String[1], right: String[0..1]): Boolean[1]**

- Parameters
  - left: String[1]
  - right: String[0..1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: String[0..1], right: String[1]): Boolean[1]**

- Parameters
  - left: String[0..1]
  - right: String[1]

- Returns
  - Boolean[1]

<br/>

**lessThanEqual(left: String[0..1], right: String[0..1]): Boolean[1]**

- Parameters
  - left: String[0..1]
  - right: String[0..1]

- Returns
  - Boolean[1]

<br/>

## letFunction

**letFunction<T>(left: String[1], right: T[m]): T[m]**

- Parameters
  - left: String[1]
  - right: T[m]

- Returns
  - T[m]

<br/>

## limit

**limit<T>(set: T[\*], count: Integer[1]): T[\*]**

- Parameters
  - set: T[\*]
  - count: Integer[1]

- Returns
  - T[\*]

<br/>

**limit(tds: TabularDataSet[1], size: Integer[0..1]): TabularDataSet[1]**

Reduce the number of rows in the provided TDS if a size is specified (otherwise returns original rows), taking the first set of rows based on the specified size

- Parameters
  - tds: TabularDataSet[1]
  - size: Integer[0..1]

- Returns
  - TabularDataSet[1]

<br/>

**limit(tds: TabularDataSet[1], size: Integer[1]): TabularDataSet[1]**

Reduce the number of rows in the provided TDS, taking the first set of rows based on the specified size

- Parameters
  - tds: TabularDataSet[1]
  - size: Integer[1]

- Returns
  - TabularDataSet[1]

<br/>

## log

**log(value: Number[1]): Float[1]**

- Parameters
  - value: Number[1]

- Returns
  - Float[1]

<br/>

## makeCamelCase

**makeCamelCase(input: String[1], upperCaseFirstLetter: Boolean[1]): String[1]**

- Parameters
  - input: String[1]
  - upperCaseFirstLetter: Boolean[1]

- Returns
  - String[1]

<br/>

**makeCamelCase(input: String[1]): String[1]**

- Parameters
  - input: String[1]

- Returns
  - String[1]

<br/>

## makeString

**makeString<K, V>(collection: Pair<K,V>[\*]): String[1]**

Returns a string representing a collection of pairs

- Parameters
  - collection: Pair<K,V>[\*]

- Returns
  - String[1]

<br/>

**makeString(any: Any[\*]): String[1]**

- Parameters
  - any: Any[\*]

- Returns
  - String[1]

<br/>

**makeString(any: Any[\*], separator: String[1]): String[1]**

- Parameters
  - any: Any[\*]
  - separator: String[1]

- Returns
  - String[1]

<br/>

**makeString(any: Any[\*], prefix: String[1], separator: String[1], suffix: String[1]): String[1]**

- Parameters
  - any: Any[\*]
  - prefix: String[1]
  - separator: String[1]
  - suffix: String[1]

- Returns
  - String[1]

<br/>

## map

**map<T, V>(value: T[\*], func: Function<{T[1]->V[\*]}>[1]): V[\*]**

- Parameters
  - value: T[\*]
  - func: Function<{T[1]->V[\*]}>[1]

- Returns
  - V[\*]

<br/>

**map<T, V>(value: T[0..1], func: Function<{T[1]->V[0..1]}>[1]): V[0..1]**

- Parameters
  - value: T[0..1]
  - func: Function<{T[1]->V[0..1]}>[1]

- Returns
  - V[0..1]

<br/>

**map<T, V>(value: T[m], func: Function<{T[1]->V[1]}>[1]): V[m]**

- Parameters
  - value: T[m]
  - func: Function<{T[1]->V[1]}>[1]

- Returns
  - V[m]

<br/>

## max

**max(left: DateTime[1], right: DateTime[1]): DateTime[1]**

- Parameters
  - left: DateTime[1]
  - right: DateTime[1]

- Returns
  - DateTime[1]

<br/>

**max(left: StrictDate[1], right: StrictDate[1]): StrictDate[1]**

- Parameters
  - left: StrictDate[1]
  - right: StrictDate[1]

- Returns
  - StrictDate[1]

<br/>

**max(left: Date[1], right: Date[1]): Date[1]**

- Parameters
  - left: Date[1]
  - right: Date[1]

- Returns
  - Date[1]

<br/>

**max(dates: DateTime[\*]): DateTime[0..1]**

- Parameters
  - dates: DateTime[\*]

- Returns
  - DateTime[0..1]

<br/>

**max(dates: StrictDate[\*]): StrictDate[0..1]**

- Parameters
  - dates: StrictDate[\*]

- Returns
  - StrictDate[0..1]

<br/>

**max(dates: Date[\*]): Date[0..1]**

- Parameters
  - dates: Date[\*]

- Returns
  - Date[0..1]

<br/>

**max(numbers: Number[\*]): Number[0..1]**

- Parameters
  - numbers: Number[\*]

- Returns
  - Number[0..1]

<br/>

**max(ints: Float[\*]): Float[0..1]**

- Parameters
  - ints: Float[\*]

- Returns
  - Float[0..1]

<br/>

**max(numbers: Number[1..\*]): Number[1]**

- Parameters
  - numbers: Number[1..\*]

- Returns
  - Number[1]

<br/>

**max(ints: Integer[1..\*]): Integer[1]**

- Parameters
  - ints: Integer[1..\*]

- Returns
  - Integer[1]

<br/>

**max(ints: Integer[\*]): Integer[0..1]**

- Parameters
  - ints: Integer[\*]

- Returns
  - Integer[0..1]

<br/>

**max(ints: Float[1..\*]): Float[1]**

- Parameters
  - ints: Float[1..\*]

- Returns
  - Float[1]

<br/>

**max(left: Integer[1], right: Integer[1]): Integer[1]**

- Parameters
  - left: Integer[1]
  - right: Integer[1]

- Returns
  - Integer[1]

<br/>

**max(left: Float[1], right: Float[1]): Float[1]**

- Parameters
  - left: Float[1]
  - right: Float[1]

- Returns
  - Float[1]

<br/>

**max(left: Number[1], right: Number[1]): Number[1]**

- Parameters
  - left: Number[1]
  - right: Number[1]

- Returns
  - Number[1]

<br/>

## mean

**mean(numbers: Float[\*]): Float[1]**

- Parameters
  - numbers: Float[\*]

- Returns
  - Float[1]

<br/>

**mean(numbers: Integer[\*]): Float[1]**

- Parameters
  - numbers: Integer[\*]

- Returns
  - Float[1]

<br/>

**mean(numbers: Number[\*]): Float[1]**

- Parameters
  - numbers: Number[\*]

- Returns
  - Float[1]

<br/>

## min

**min(left: DateTime[1], right: DateTime[1]): DateTime[1]**

- Parameters
  - left: DateTime[1]
  - right: DateTime[1]

- Returns
  - DateTime[1]

<br/>

**min(left: StrictDate[1], right: StrictDate[1]): StrictDate[1]**

- Parameters
  - left: StrictDate[1]
  - right: StrictDate[1]

- Returns
  - StrictDate[1]

<br/>

**min(left: Date[1], right: Date[1]): Date[1]**

- Parameters
  - left: Date[1]
  - right: Date[1]

- Returns
  - Date[1]

<br/>

**min(dates: DateTime[\*]): DateTime[0..1]**

- Parameters
  - dates: DateTime[\*]

- Returns
  - DateTime[0..1]

<br/>

**min(dates: StrictDate[\*]): StrictDate[0..1]**

- Parameters
  - dates: StrictDate[\*]

- Returns
  - StrictDate[0..1]

<br/>

**min(dates: Date[\*]): Date[0..1]**

- Parameters
  - dates: Date[\*]

- Returns
  - Date[0..1]

<br/>

**min(left: Integer[1], right: Integer[1]): Integer[1]**

- Parameters
  - left: Integer[1]
  - right: Integer[1]

- Returns
  - Integer[1]

<br/>

**min(left: Float[1], right: Float[1]): Float[1]**

- Parameters
  - left: Float[1]
  - right: Float[1]

- Returns
  - Float[1]

<br/>

**min(left: Number[1], right: Number[1]): Number[1]**

- Parameters
  - left: Number[1]
  - right: Number[1]

- Returns
  - Number[1]

<br/>

**min(ints: Integer[1..\*]): Integer[1]**

- Parameters
  - ints: Integer[1..\*]

- Returns
  - Integer[1]

<br/>

**min(ints: Integer[\*]): Integer[0..1]**

- Parameters
  - ints: Integer[\*]

- Returns
  - Integer[0..1]

<br/>

**min(ints: Float[1..\*]): Float[1]**

- Parameters
  - ints: Float[1..\*]

- Returns
  - Float[1]

<br/>

**min(ints: Float[\*]): Float[0..1]**

- Parameters
  - ints: Float[\*]

- Returns
  - Float[0..1]

<br/>

**min(numbers: Number[1..\*]): Number[1]**

- Parameters
  - numbers: Number[1..\*]

- Returns
  - Number[1]

<br/>

**min(numbers: Number[\*]): Number[0..1]**

- Parameters
  - numbers: Number[\*]

- Returns
  - Number[0..1]

<br/>

## minus

**minus(numbers: Number[\*]): Number[1]**

- Parameters
  - numbers: Number[\*]

- Returns
  - Number[1]

<br/>

**minus(float: Float[\*]): Float[1]**

- Parameters
  - float: Float[\*]

- Returns
  - Float[1]

<br/>

**minus(ints: Integer[\*]): Integer[1]**

- Parameters
  - ints: Integer[\*]

- Returns
  - Integer[1]

<br/>

**minus(decimal: Decimal[\*]): Decimal[1]**

- Parameters
  - decimal: Decimal[\*]

- Returns
  - Decimal[1]

<br/>

## minute

**minute(d: Date[1]): Integer[1]**

- Parameters
  - d: Date[1]

- Returns
  - Integer[1]

<br/>

## mod

**mod(dividend: Integer[1], divisor: Integer[1]): Integer[1]**

- Parameters
  - dividend: Integer[1]
  - divisor: Integer[1]

- Returns
  - Integer[1]

<br/>

## month

**month(d: Date[1]): Month[1]**

- Parameters
  - d: Date[1]

- Returns
  - Month[1]

<br/>

**month(number: Integer[1]): Month[1]**

- Parameters
  - number: Integer[1]

- Returns
  - Month[1]

<br/>

## monthNumber

**monthNumber(d: Date[1]): Integer[1]**

- Parameters
  - d: Date[1]

- Returns
  - Integer[1]

<br/>

**monthNumber(d: Date[0..1]): Integer[0..1]**

- Parameters
  - d: Date[0..1]

- Returns
  - Integer[0..1]

<br/>

## mostRecentDayOfWeek

**mostRecentDayOfWeek(day: DayOfWeek[1]): Date[1]**

Returns the most recent instance of the given day of the week that is no later than today.

- Parameters
  - day: DayOfWeek[1]

- Returns
  - Date[1]

<br/>

**mostRecentDayOfWeek(date: Date[1], day: DayOfWeek[1]): Date[1]**

Returns the most recent instance of the given day of the week that is no later than the given date.

- Parameters
  - date: Date[1]
  - day: DayOfWeek[1]

- Returns
  - Date[1]

<br/>

## not

**not(bool: Boolean[1]): Boolean[1]**

- Parameters
  - bool: Boolean[1]

- Returns
  - Boolean[1]

<br/>

## now

**now(): DateTime[1]**

- Parameters


- Returns
  - DateTime[1]

<br/>

## olapGroupBy

**olapGroupBy<T>(tds: TabularDataSet[1], columns: String[\*], operation: OlapOperation<T>[1], columnName: String[1]): TabularDataSet[1]**

- Parameters
  - tds: TabularDataSet[1]
  - columns: String[\*]
  - operation: OlapOperation<T>[1]
  - columnName: String[1]

- Returns
  - TabularDataSet[1]

<br/>

**olapGroupBy<T>(tds: TabularDataSet[1], columns: String[\*], sortBy: SortInformation[0..1], operation: OlapOperation<T>[1], columnName: String[1]): TabularDataSet[1]**

- Parameters
  - tds: TabularDataSet[1]
  - columns: String[\*]
  - sortBy: SortInformation[0..1]
  - operation: OlapOperation<T>[1]
  - columnName: String[1]

- Returns
  - TabularDataSet[1]

<br/>

**olapGroupBy<T>(tds: TabularDataSet[1], sort: SortInformation[0..1], operation: OlapOperation<T>[1], columnName: String[1]): TabularDataSet[1]**

- Parameters
  - tds: TabularDataSet[1]
  - sort: SortInformation[0..1]
  - operation: OlapOperation<T>[1]
  - columnName: String[1]

- Returns
  - TabularDataSet[1]

<br/>

**olapGroupBy<T>(tds: TabularDataSet[1], operation: OlapOperation<T>[1], columnName: String[1]): TabularDataSet[1]**

- Parameters
  - tds: TabularDataSet[1]
  - operation: OlapOperation<T>[1]
  - columnName: String[1]

- Returns
  - TabularDataSet[1]

<br/>

## or

**or(vals: Boolean[1..\*]): Boolean[1]**

- Parameters
  - vals: Boolean[1..\*]

- Returns
  - Boolean[1]

<br/>

**or(first: Boolean[1], second: Boolean[1]): Boolean[1]**

- Parameters
  - first: Boolean[1]
  - second: Boolean[1]

- Returns
  - Boolean[1]

<br/>

## parseBoolean

**parseBoolean(string: String[1]): Boolean[1]**

- Parameters
  - string: String[1]

- Returns
  - Boolean[1]

<br/>

## parseDate

**parseDate(string: String[1]): Date[1]**

- Parameters
  - string: String[1]

- Returns
  - Date[1]

<br/>

## parseFloat

**parseFloat(string: String[1]): Float[1]**

- Parameters
  - string: String[1]

- Returns
  - Float[1]

<br/>

## parseInteger

**parseInteger(string: String[1]): Integer[1]**

- Parameters
  - string: String[1]

- Returns
  - Integer[1]

<br/>

## pi

**pi(): Float[1]**

- Parameters


- Returns
  - Float[1]

<br/>

## plus

**plus(ints: Integer[\*]): Integer[1]**

- Parameters
  - ints: Integer[\*]

- Returns
  - Integer[1]

<br/>

**plus(float: Float[\*]): Float[1]**

- Parameters
  - float: Float[\*]

- Returns
  - Float[1]

<br/>

**plus(numbers: Number[\*]): Number[1]**

- Parameters
  - numbers: Number[\*]

- Returns
  - Number[1]

<br/>

**plus(decimal: Decimal[\*]): Decimal[1]**

- Parameters
  - decimal: Decimal[\*]

- Returns
  - Decimal[1]

<br/>

**plus(strings: String[\*]): String[1]**

- Parameters
  - strings: String[\*]

- Returns
  - String[1]

<br/>

## pow

**pow(base: Number[1], exponent: Number[1]): Number[1]**

- Parameters
  - base: Number[1]
  - exponent: Number[1]

- Returns
  - Number[1]

<br/>

## previousDayOfWeek

**previousDayOfWeek(date: Date[1], day: DayOfWeek[1]): Date[1]**

Returns the most recent instance of the given day of the week that is strictly before the given date.

- Parameters
  - date: Date[1]
  - day: DayOfWeek[1]

- Returns
  - Date[1]

<br/>

**previousDayOfWeek(day: DayOfWeek[1]): Date[1]**

Returns the most recent instance of the given day of the week that is strictly before today.

- Parameters
  - day: DayOfWeek[1]

- Returns
  - Date[1]

<br/>

## project

**project(tds: TabularDataSet[1], columnFunctions: ColumnSpecification<TDSRow>[\*]): TabularDataSet[1]**

Project the specified calculated columns from the provided TDS.  This is similar to extend, but rather than adding the columns it replaces all of the existing ones 

- Parameters
  - tds: TabularDataSet[1]
  - columnFunctions: ColumnSpecification<TDSRow>[\*]

- Returns
  - TabularDataSet[1]

<br/>

**project<K>(set: K[\*], functions: Function<{K[1]->Any[\*]}>[\*], ids: String[\*]): TabularDataSet[1]**

Project the values from the lambda functions specified to create a new TDS

- Parameters
  - set: K[\*]
  - functions: Function<{K[1]->Any[\*]}>[\*]
  - ids: String[\*]

- Returns
  - TabularDataSet[1]

<br/>

**project(tds: TableTDS[1], columnFunctions: ColumnSpecification<TDSRow>[\*]): TabularDataSet[1]**

Project the specified calculated columns from the provided TDS.  This is similar to extend, but rather than adding the columns it replaces all of the existing ones 

- Parameters
  - tds: TableTDS[1]
  - columnFunctions: ColumnSpecification<TDSRow>[\*]

- Returns
  - TabularDataSet[1]

<br/>

**project<T>(set: T[\*], paths: Path<T,Any|\*>[\*]): TabularDataSet[1]**

Project the values from the property paths specified to create a new TDS

- Parameters
  - set: T[\*]
  - paths: Path<T,Any|\*>[\*]

- Returns
  - TabularDataSet[1]

<br/>

**project<T>(set: T[\*], columnSpecifications: ColumnSpecification<T>[\*]): TabularDataSet[1]**

Project the values from the columns specifications provided to create a new TDS

- Parameters
  - set: T[\*]
  - columnSpecifications: ColumnSpecification<T>[\*]

- Returns
  - TabularDataSet[1]

<br/>

## projectWithColumnSubset

**projectWithColumnSubset<T>(set: T[\*], functions: Function<{T[1]->Any[\*]}>[\*], ids: String[\*], columnList: String[\*]): TabularDataSet[1]**

- Parameters
  - set: T[\*]
  - functions: Function<{T[1]->Any[\*]}>[\*]
  - ids: String[\*]
  - columnList: String[\*]

- Returns
  - TabularDataSet[1]

<br/>

**projectWithColumnSubset<T>(set: T[\*], columnSpecifications: ColumnSpecification<T>[\*], columnList: String[\*]): TabularDataSet[1]**

- Parameters
  - set: T[\*]
  - columnSpecifications: ColumnSpecification<T>[\*]
  - columnList: String[\*]

- Returns
  - TabularDataSet[1]

<br/>

## quarter

**quarter(d: Date[1]): Quarter[1]**

- Parameters
  - d: Date[1]

- Returns
  - Quarter[1]

<br/>

**quarter(number: Integer[1]): Quarter[1]**

- Parameters
  - number: Integer[1]

- Returns
  - Quarter[1]

<br/>

## quarterNumber

**quarterNumber(d: Date[1]): Integer[1]**

- Parameters
  - d: Date[1]

- Returns
  - Integer[1]

<br/>

## rank

**rank(values: Any[\*]): Map<Any,Integer>[1]**

- Parameters
  - values: Any[\*]

- Returns
  - Map<Any,Integer>[1]

<br/>

## rem

**rem(dividend: Number[1], divisor: Number[1]): Number[1]**

- Parameters
  - dividend: Number[1]
  - divisor: Number[1]

- Returns
  - Number[1]

<br/>

## removeDuplicates

**removeDuplicates<T>(col: T[\*]): T[\*]**

- Parameters
  - col: T[\*]

- Returns
  - T[\*]

<br/>

**removeDuplicates<T>(col: T[\*], eql: Function<{T[1],T[1]->Boolean[1]}>[1]): T[\*]**

- Parameters
  - col: T[\*]
  - eql: Function<{T[1],T[1]->Boolean[1]}>[1]

- Returns
  - T[\*]

<br/>

## renameColumns

**renameColumns(tds: TabularDataSet[1], columnMappings: Pair<String,String>[\*]): TabularDataSet[1]**

Rename the specified columns in the provided TDS to a new name

- Parameters
  - tds: TabularDataSet[1]
  - columnMappings: Pair<String,String>[\*]

- Returns
  - TabularDataSet[1]

<br/>

## replace

**replace(source: String[1], toReplace: String[1], replacement: String[1]): String[1]**

- Parameters
  - source: String[1]
  - toReplace: String[1]
  - replacement: String[1]

- Returns
  - String[1]

<br/>

## reportDelta

**reportDelta<T>(input: T[m], strategy: ReportDeltaStrategy[1]): T[m]**

- Parameters
  - input: T[m]
  - strategy: ReportDeltaStrategy[1]

- Returns
  - T[m]

<br/>

## restrict

**restrict(tds: TabularDataSet[1], columnNames: String[\*]): TabularDataSet[1]**

Restrict / reduce the columns from within the provided TDS

- Parameters
  - tds: TabularDataSet[1]
  - columnNames: String[\*]

- Returns
  - TabularDataSet[1]

<br/>

## round

**round(decimal: Decimal[1], scale: Integer[1]): Decimal[1]**

- Parameters
  - decimal: Decimal[1]
  - scale: Integer[1]

- Returns
  - Decimal[1]

<br/>

**round(number: Number[1]): Integer[1]**

- Parameters
  - number: Number[1]

- Returns
  - Integer[1]

<br/>

**round(float: Float[1], scale: Integer[1]): Float[1]**

- Parameters
  - float: Float[1]
  - scale: Integer[1]

- Returns
  - Float[1]

<br/>

## second

**second(d: Date[1]): Integer[1]**

- Parameters
  - d: Date[1]

- Returns
  - Integer[1]

<br/>

## serialize

**serialize<T>(collection: Checked<T>[\*], graphFetchTree: RootGraphFetchTree<T>[1]): String[1]**

- Parameters
  - collection: Checked<T>[\*]
  - graphFetchTree: RootGraphFetchTree<T>[1]

- Returns
  - String[1]

<br/>

**serialize<T>(collection: T[\*], graphFetchTree: RootGraphFetchTree<T>[1]): String[1]**

- Parameters
  - collection: T[\*]
  - graphFetchTree: RootGraphFetchTree<T>[1]

- Returns
  - String[1]

<br/>

## sin

**sin(number: Number[1]): Float[1]**

- Parameters
  - number: Number[1]

- Returns
  - Float[1]

<br/>

## size

**size(p: Any[\*]): Integer[1]**

- Parameters
  - p: Any[\*]

- Returns
  - Integer[1]

<br/>

## slice

**slice<T>(set: T[\*], start: Integer[1], end: Integer[1]): T[\*]**

- Parameters
  - set: T[\*]
  - start: Integer[1]
  - end: Integer[1]

- Returns
  - T[\*]

<br/>

**slice(tds: TabularDataSet[1], start: Integer[1], stop: Integer[1]): TabularDataSet[1]**

Reduce the number of rows in the provided TDS, selecting the set of rows in the specified range between start and stop

- Parameters
  - tds: TabularDataSet[1]
  - start: Integer[1]
  - stop: Integer[1]

- Returns
  - TabularDataSet[1]

<br/>

## sort

**sort<T>(col: T[m]): T[m]**

- Parameters
  - col: T[m]

- Returns
  - T[m]

<br/>

**sort(tds: TabularDataSet[1], columns: String[\*]): TabularDataSet[1]**

Sort the provided TDS based on the specified column (with ascending direction)

- Parameters
  - tds: TabularDataSet[1]
  - columns: String[\*]

- Returns
  - TabularDataSet[1]

<br/>

**sort(tds: TabularDataSet[1], column: String[1], direction: SortDirection[1]): TabularDataSet[1]**

Sort the provided TDS based on the specified column & direction

- Parameters
  - tds: TabularDataSet[1]
  - column: String[1]
  - direction: SortDirection[1]

- Returns
  - TabularDataSet[1]

<br/>

**sort(tds: TabularDataSet[1], sortInfo: SortInformation[\*]): TabularDataSet[1]**

Sort the provided TDS based on the specified information (sorting is based on order of the sort information)

- Parameters
  - tds: TabularDataSet[1]
  - sortInfo: SortInformation[\*]

- Returns
  - TabularDataSet[1]

<br/>

## sortBy

**sortBy<T, U>(col: T[m], key: Function<{T[1]->U[1]}>[0..1]): T[m]**

- Parameters
  - col: T[m]
  - key: Function<{T[1]->U[1]}>[0..1]

- Returns
  - T[m]

<br/>

## split

**split(str: String[1], token: String[1]): String[\*]**

- Parameters
  - str: String[1]
  - token: String[1]

- Returns
  - String[\*]

<br/>

## splitOnCamelCase

**splitOnCamelCase(str: String[1]): String[\*]**

Split the proivded string on camel case

- Parameters
  - str: String[1]

- Returns
  - String[\*]

<br/>

## sqrt

**sqrt(number: Number[1]): Float[1]**

- Parameters
  - number: Number[1]

- Returns
  - Float[1]

<br/>

## startsWith

**startsWith(source: String[1], val: String[1]): Boolean[1]**

- Parameters
  - source: String[1]
  - val: String[1]

- Returns
  - Boolean[1]

- Usage
```
{|Person->getAll()
		->project({a|$a.firstName->startsWith('tri')}, 'a')}
```

<br/>

**startsWith(source: String[0..1], val: String[1]): Boolean[1]**

- Parameters
  - source: String[0..1]
  - val: String[1]

- Returns
  - Boolean[1]

<br/>

## stdDevPopulation

**stdDevPopulation(numbers: Number[\*]): Number[1]**

- Parameters
  - numbers: Number[\*]

- Returns
  - Number[1]

<br/>

**stdDevPopulation(numbers: Number[1..\*]): Number[1]**

- Parameters
  - numbers: Number[1..\*]

- Returns
  - Number[1]

<br/>

## stdDevSample

**stdDevSample(numbers: Number[\*]): Number[1]**

- Parameters
  - numbers: Number[\*]

- Returns
  - Number[1]

<br/>

**stdDevSample(numbers: Number[1..\*]): Number[1]**

- Parameters
  - numbers: Number[1..\*]

- Returns
  - Number[1]

<br/>

## subType

**subType<T>(source: Any[m], object: T[1]): T[m]**

- Parameters
  - source: Any[m]
  - object: T[1]

- Returns
  - T[m]

<br/>

## substring

**substring(str: String[1], start: Integer[1], end: Integer[1]): String[1]**

- Parameters
  - str: String[1]
  - start: Integer[1]
  - end: Integer[1]

- Returns
  - String[1]

<br/>

**substring(str: String[1], start: Integer[1]): String[1]**

- Parameters
  - str: String[1]
  - start: Integer[1]

- Returns
  - String[1]

<br/>

## substringAfter

**substringAfter(source: String[1], toFind: String[1]): String[1]**

Returns part of the string after the specified sequence, blank string if not present

- Parameters
  - source: String[1]
  - toFind: String[1]

- Returns
  - String[1]

<br/>

## substringBefore

**substringBefore(source: String[1], toFind: String[1]): String[1]**

Returns part of the string before the specified sequence, or the complete string if not present

- Parameters
  - source: String[1]
  - toFind: String[1]

- Returns
  - String[1]

<br/>

## sum

**sum(numbers: Float[\*]): Float[1]**

- Parameters
  - numbers: Float[\*]

- Returns
  - Float[1]

<br/>

**sum(numbers: Integer[\*]): Integer[1]**

- Parameters
  - numbers: Integer[\*]

- Returns
  - Integer[1]

<br/>

**sum(numbers: Number[\*]): Number[1]**

- Parameters
  - numbers: Number[\*]

- Returns
  - Number[1]

<br/>

## tableReference

**tableReference(database: Database[1], schemaName: String[1], tableName: String[1]): Table[1]**

- Parameters
  - database: Database[1]
  - schemaName: String[1]
  - tableName: String[1]

- Returns
  - Table[1]

<br/>

## tableToTDS

**tableToTDS(table: Table[1]): TableTDS[1]**

- Parameters
  - table: Table[1]

- Returns
  - TableTDS[1]

<br/>

## take

**take<T>(set: T[\*], count: Integer[1]): T[\*]**

- Parameters
  - set: T[\*]
  - count: Integer[1]

- Returns
  - T[\*]

<br/>

**take(tds: TabularDataSet[1], size: Integer[1]): TabularDataSet[1]**

Reduce the number of rows in the provided TDS, taking the first set of rows based on the specified size

- Parameters
  - tds: TabularDataSet[1]
  - size: Integer[1]

- Returns
  - TabularDataSet[1]

- Usage
```
{|Person->getAll()->project(name)->take(0)}
```

<br/>

## tan

**tan(number: Number[1]): Float[1]**

- Parameters
  - number: Number[1]

- Returns
  - Float[1]

<br/>

## tdsContains

**tdsContains<T>(object: T[1], functions: Function<{T[1]->Any[0..1]}>[\*], ids: String[\*], tds: TabularDataSet[1], crossOperation: Function<{TDSRow[1],TDSRow[1]->Boolean[1]}>[1]): Boolean[1]**

- Parameters
  - object: T[1]
  - functions: Function<{T[1]->Any[0..1]}>[\*]
  - ids: String[\*]
  - tds: TabularDataSet[1]
  - crossOperation: Function<{TDSRow[1],TDSRow[1]->Boolean[1]}>[1]

- Returns
  - Boolean[1]

<br/>

**tdsContains<T>(object: T[1], functions: Function<{T[1]->Any[0..1]}>[\*], tds: TabularDataSet[1]): Boolean[1]**

- Parameters
  - object: T[1]
  - functions: Function<{T[1]->Any[0..1]}>[\*]
  - tds: TabularDataSet[1]

- Returns
  - Boolean[1]

<br/>

## tdsRows

**tdsRows(tds: TabularDataSet[1]): TDSRow[\*]**

- Parameters
  - tds: TabularDataSet[1]

- Returns
  - TDSRow[\*]

<br/>

## times

**times(numbers: Number[\*]): Number[1]**

- Parameters
  - numbers: Number[\*]

- Returns
  - Number[1]

<br/>

**times(ints: Integer[\*]): Integer[1]**

- Parameters
  - ints: Integer[\*]

- Returns
  - Integer[1]

<br/>

**times(ints: Float[\*]): Float[1]**

- Parameters
  - ints: Float[\*]

- Returns
  - Float[1]

<br/>

## toDegrees

**toDegrees(radians: Number[1]): Float[1]**

- Parameters
  - radians: Number[1]

- Returns
  - Float[1]

<br/>

## toJSON

**toJSON(obj: Any[\*]): String[1]**

- Parameters
  - obj: Any[\*]

- Returns
  - String[1]

<br/>

**toJSON<T>(obj: T[\*], propertyPaths: LambdaFunction<{T[1]->Any[\*]}>[\*]): String[1]**

- Parameters
  - obj: T[\*]
  - propertyPaths: LambdaFunction<{T[1]->Any[\*]}>[\*]

- Returns
  - String[1]

<br/>

## toLower

**toLower(source: String[1]): String[1]**

- Parameters
  - source: String[1]

- Returns
  - String[1]

<br/>

## toOne

**toOne<T>(values: T[\*]): T[1]**

- Parameters
  - values: T[\*]

- Returns
  - T[1]

<br/>

## toOneMany

**toOneMany<T>(values: T[\*]): T[1..\*]**

- Parameters
  - values: T[\*]

- Returns
  - T[1..\*]

<br/>

## toRadians

**toRadians(degrees: Number[1]): Float[1]**

- Parameters
  - degrees: Number[1]

- Returns
  - Float[1]

<br/>

## toString

**toString(any: Any[1]): String[1]**

- Parameters
  - any: Any[1]

- Returns
  - String[1]

<br/>

## toUpper

**toUpper(source: String[1]): String[1]**

- Parameters
  - source: String[1]

- Returns
  - String[1]

<br/>

## today

**today(): StrictDate[1]**

- Parameters


- Returns
  - StrictDate[1]

- Usage
```
{|Trade->getAll()
       ->filter({t|$t.settlementDateTime->datePart() == today()})
       ->project({t|$t.id}, 'tradeId')}
```

<br/>

## trim

**trim(str: String[1]): String[1]**

- Parameters
  - str: String[1]

- Returns
  - String[1]

<br/>

## union

**union<T>(set1: T[\*], set2: T[\*]): T[\*]**

- Parameters
  - set1: T[\*]
  - set2: T[\*]

- Returns
  - T[\*]

<br/>

## uniqueValueOnly

**uniqueValueOnly<T>(values: T[\*], defaultValue: T[0..1]): T[0..1]**

- Parameters
  - values: T[\*]
  - defaultValue: T[0..1]

- Returns
  - T[0..1]

<br/>

**uniqueValueOnly<T>(values: T[\*]): T[0..1]**

- Parameters
  - values: T[\*]

- Returns
  - T[0..1]

<br/>

## unknownDefaultBusinessDate

**unknownDefaultBusinessDate(): Date[1]**

- Parameters


- Returns
  - Date[1]

<br/>

## warn

**warn(b: Boolean[1], message: String[1]): Boolean[1]**

- Parameters
  - b: Boolean[1]
  - message: String[1]

- Returns
  - Boolean[1]

<br/>

## weekOfYear

**weekOfYear(d: Date[1]): Integer[1]**

- Parameters
  - d: Date[1]

- Returns
  - Integer[1]

<br/>

**weekOfYear(d: Date[0..1]): Integer[0..1]**

- Parameters
  - d: Date[0..1]

- Returns
  - Integer[0..1]

<br/>

## year

**year(d: Date[1]): Integer[1]**

- Parameters
  - d: Date[1]

- Returns
  - Integer[1]

<br/>

**year(d: Date[0..1]): Integer[0..1]**

- Parameters
  - d: Date[0..1]

- Returns
  - Integer[0..1]

<br/>



