package com.szgwnet.discharge.dao;

import com.szgwnet.discharge.model.Org;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface OrgDao {
    @Select("   select O.id as id,O.name as name from GWN_PUB_ORG O inner join GWN_PUB_USER_ORG_REL L on O.ID = L.ORG_ID where L.USER_ID = #{userId} ORDER BY O.DIS_ORDER")
    List<Org> selUserOrgRel(@Param("userId") int userId);
}