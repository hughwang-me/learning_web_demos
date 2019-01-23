package com.uwjx.redux.bean;

import lombok.Data;

@Data
public class DataBean<T> {

    private Integer code;
    private String message;
    private T data;

}
