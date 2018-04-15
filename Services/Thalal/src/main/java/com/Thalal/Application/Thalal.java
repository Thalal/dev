package com.Thalal.Application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })

public class Thalal {

	public static void main(String[] args) {
		SpringApplication.run(Thalal.class, args);
	}
	
}
