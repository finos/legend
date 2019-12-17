---
id: user-guide
title: PURE/Alloy User Guide
sidebar_label: User Guide
---
![PURE/Alloy](assets/purealloy-logo.png)

When added to the PURE/Alloy pilot, you will receive an email to activate your GitLab account, which will also grant you access to Foundry, the Alloy user interface.

## First Alloy login
Access https://gitlab.alloy.finos.org and login with the credentials provided via email ; afterwards, visit https://alloy.finos.org/foundry/index.html ; you should see the following screen.

![Alloy First screen](https://github.com/finos-admin/alloy-config/raw/master/docs/alloy-first-screen.png)

If you can't find any, create a project using the `Create Project` button, and a branch with the name of your choice. Press `Next` and you should see the following screen.

Branches are used the standard way GitLab does, as change sets. The `master` branch is configured as a protected one, so the way to get changes onto master is to create a branch for your change using the Foundry interface, complete and test your change, and use Foundry to submit a Merge Request to merge your branch onto `master`.

![Alloy dashboard](https://github.com/finos-admin/alloy-config/raw/master/docs/alloy-dashboard.png)

## Create a class

Create a new package - using the `+` button - with the name of your choice, ie `org.finos.alloy.demo`, then create a class, ie `Person`.

![Alloy create package](https://github.com/finos-admin/alloy-config/raw/master/docs/create-package.png)

![Alloy create class](https://github.com/finos-admin/alloy-config/raw/master/docs/create-class.png)

## Model a class

Browse the package and double click on the class you previously created; the modeling panel will show on the main window.

![Alloy model class](https://github.com/finos-admin/alloy-config/raw/master/docs/model-person.png)

Use this view (`Form` view) to define class properties; at any stage, switch view, using the drop-down on the top-right corner, to view the `JSON`, `JAVA` and `SLANG` versions of the current object definition.

![Alloy model class views](https://github.com/finos-admin/alloy-config/raw/master/docs/model-person-views.png)

Below the Java version.

![Alloy model in Java](https://github.com/finos-admin/alloy-config/raw/master/docs/model-person-java.png)

## Save changes
TODO - blocked by https://github.com/finos-admin/alloy-config/issues/23