package com.szgwnet.discharge.dao;

import com.szgwnet.discharge.model.Role;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface RoleDao {
    @Select("  select O.id as id,O.name as name from GWN_PUB_ROLE O inner join GWN_PUB_USER_ROLE_REL L on O.ID = L.ROLE_ID where L.USER_ID = #{userId} and APP_ID = 32 ORDER BY O.DIS_ORDER")
    List<Role> selUserRoleRel(@Param("userId") int userId);
}