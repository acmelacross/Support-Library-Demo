package com.example.administrator.myapplication;

import android.os.Bundle;
import android.support.design.widget.TextInputLayout;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class TextInputLayoutAcitivity extends AppCompatActivity {
    TextInputLayout usernameWrapper,passwordWrapper;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_text_input_layout_acitivity);
        usernameWrapper= (TextInputLayout) findViewById(R.id.usernameWrapper);
        passwordWrapper   = (TextInputLayout) findViewById(R.id.passwordWrapper);
       //要让浮动标签动起来，你只需设置一个hint，使用setHint方法：

        usernameWrapper.setHint("Username2");
        passwordWrapper.setHint("Password2");
    }

    public void onClick(View view) {
      //  hideKeyboard();

        String username = usernameWrapper.getEditText().getText().toString();
        String password = usernameWrapper.getEditText().getText().toString();
        if (true) {
            usernameWrapper.setError("Not a valid email address!");
        } else if (true) {
            passwordWrapper.setError("Not a valid password!");
        } else {
            usernameWrapper.setErrorEnabled(false);
            passwordWrapper.setErrorEnabled(false);
          //  doLogin();
        }
    }
}
