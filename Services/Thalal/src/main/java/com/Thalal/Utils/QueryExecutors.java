package com.Thalal.Utils;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class QueryExecutors {

	@Autowired
	public JdbcTemplate jdbcTemplate;

	public List<Map<String, Object>> select(String sql) throws SQLException {
		System.out.println(sql);
		return jdbcTemplate.queryForList(sql);
	}
	public int insert(String sql ) {		
	return jdbcTemplate.update(sql);
	}
	
	public int[] batchUpdate(String[] sql) {
		return jdbcTemplate.batchUpdate(sql);
	}

}
