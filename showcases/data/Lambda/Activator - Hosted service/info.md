---
title: Hosted Service Activator
description: Examples of hosted service definitions and features
---

# Hosted Service Activator

This showcase demonstrates how to define and configure hosted services in Legend. Hosted services allow you to expose Pure functions as HTTP endpoints with specific URL patterns.

## Basic Features

A hosted service definition requires the following elements:

- **pattern**: The URL pattern for accessing the service, which can include path parameters
- **ownership**: Who owns the service (UserList or Deployment)
- **function**: The Pure function to be executed when the service is called
- **documentation**: Description of what the service does
- **autoActivateUpdates**: Whether updates to the service should be automatically activated

## Example 1: Basic Hosted Service with UserList Ownership

```
HostedService model::BasicHostedService
{
  pattern: '/api/greet/{name}';
  ownership: UserList { users: ['user1', 'user2'] };
  function: model::greet(String[1]):String[1];
  documentation: 'A simple hosted service that greets users by name';
  autoActivateUpdates: true;
}
```

This example defines a hosted service that:
- Is accessible at the URL pattern `/api/greet/{name}`
- Is owned by a list of users ('user1' and 'user2')
- Executes the `model::greet` function when called
- Has automatic activation of updates enabled

## Example 2: Hosted Service with Deployment Ownership

```
HostedService <<meta::pure::profiles::doc.doc>> {doc.doc='Example with deployment ownership'} model::DeploymentHostedService
{
  pattern: '/api/process/{data}';
  ownership: Deployment { identifier: '12345' };
  function: model::processData(String[1]):String[1];
  documentation: 'A hosted service that processes data with deployment ownership';
  autoActivateUpdates: false;
}
```

This example shows:
- Using stereotypes and tagged values for additional metadata
- Deployment ownership with an identifier
- Disabling automatic activation of updates

## Example 3: Advanced Features with Post-Deployment Actions

```
HostedService model::AdvancedHostedService
{
  pattern: '/api/advanced/{param}';
  ownership: UserList { users: ['admin'] };
  function: model::processData(String[1]):String[1];
  documentation: 'Advanced hosted service with post-deployment actions';
  autoActivateUpdates: true;
  actions:
  {
    SlackNotify
    {
      channel: '#deployments';
      message: 'Hosted service has been deployed';
    }
  }
}
```

This example demonstrates:
- Post-deployment actions (SlackNotify in this case)
- Configuration of the post-deployment action
