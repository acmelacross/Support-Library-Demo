package com.example.administrator.myapplication;

import android.support.design.widget.CoordinatorLayout;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class SnacbarCoordinatorLayoutActivity extends AppCompatActivity {
    CoordinatorLayout container;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_snacbar_coordinator_layout);
        container = (CoordinatorLayout) findViewById(R.id.container);

//        Snackbar.make(container, "你知道了吗",Snackbar.LENGTH_LONG).setAction("我知道了", new View.OnClickListener() {
//            public void onClick(View v) {
//                Snackbar.make(container,"ActionClick",Snackbar.LENGTH_LONG).show();
//            }
//        }).show();
        Snackbar.make(container, "你知道了吗", Snackbar.LENGTH_LONG).show();
    }
}
