package com.szgwnet.discharge.dao;

import com.szgwnet.discharge.model.Role;


import java.util.List;

public interface RoleDao {
    List<Role> selUserRoleRel(int id);
}