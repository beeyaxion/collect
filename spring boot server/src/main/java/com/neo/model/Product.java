package com.neo.model;

import java.util.List;

public class Product {
	
	private int id;
	private String title;
	private double price;
	private double rating;
	private String desc;
	
	public List<String> categories;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public List<String> getCategories() {
		return categories;
	}

	public void setCategories(List<String> categories) {
		this.categories = categories;
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(int id, String title, double price, double rating, String desc, List<String> categories) {
		super();
		this.id = id;
		this.title = title;
		this.price = price;
		this.rating = rating;
		this.desc = desc;
		this.categories = categories;
	}
	
	

}
