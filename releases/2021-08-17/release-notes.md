# Release 2021-08-17 

## New Features 

The following features have been released.

### Legend Studio 

N/A

### Legend SDLC   

__Project Build__

New projects are created with a Maven build which when executed performs the following :
* Executes model tests 
* Generates various artifacts such as service execution jars and JSON schemas.

__Project Build Pipeline__

Legend SLDC server installations can be extended via a `ProjectStructureExtensionProvider`. This construct allows Legend installations to customize the Gitlab CI/CD 
experience for Legend Studio projects. For example, one such customzation is the creation of a `gitlab-ci.yml` file which can execute the project's build. 

### Legend Engine 

N/A

## Bugs 
