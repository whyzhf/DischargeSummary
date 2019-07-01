package com.szgwnet.discharge.model;

/**
 * @Auther: why
 * @Data:2019/6/10
 * @Deacription:
 */
public class CountStatus {
    private Integer status=0;
    private Integer Count=0;

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getCount() {
        return Count;
    }

    public void setCount(Integer count) {
        Count = count;
    }

    @Override
    public String toString() {
        return "CountStatus{" +
                "status=" + status +
                ", Count=" + Count +
                '}';
    }
}
