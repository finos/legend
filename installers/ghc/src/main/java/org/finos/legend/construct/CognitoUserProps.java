package org.finos.legend.construct;

import software.amazon.awscdk.services.cognito.IUserPool;

public class CognitoUserProps {

    private IUserPool userPool;
    private String username;
    private String password;

    public IUserPool getUserPool() {
        return userPool;
    }

    public void setUserPool(IUserPool userPool) {
        this.userPool = userPool;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
