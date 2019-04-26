package com.szgwnet.discharge.model.ExceptionEntity;

/**
   * 响应码枚举
   * @author why
   * @date 2019/4/24
   * @description  响应码枚举，参考HTTP状态码的语义
 */

public enum ResultCode {
    //成功
    SUCCESS(200),
    //失败
    FAIL(400),
    //接口不存在
    NOT_FOUND(1404),
    //服务器内部错误
    INTERNAL_SERVER_ERROR(500);

    private final Integer code;

    ResultCode(Integer code) {
        this.code = code;
    }

    public Integer code() {
        return code;
    }
}
