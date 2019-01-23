package com.uwjx.redux.controller;

import com.uwjx.redux.bean.DataBean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ReduxController {

    @GetMapping(value = "getTodoList")
    public DataBean get(){
        DataBean dataBean = new DataBean();
        List<String> items = new ArrayList<>();
        items.add("事件A");
        items.add("事件B");
        dataBean.setData(items);
        dataBean.setCode(200);
        dataBean.setMessage("ok");
        return dataBean;
    }

}
