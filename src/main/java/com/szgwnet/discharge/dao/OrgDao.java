package com.szgwnet.discharge.dao;

import com.szgwnet.discharge.model.Org;


import java.util.List;

public interface OrgDao {
    List<Org> selUserOrgRel(int userId);
}