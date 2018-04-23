package com.neo.model;

public class Comment {
	
	private int id;
	private int productId;
	private String timeStamp;
	private String user;
	private double rating;
	private String content;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(String timeStamp) {
		this.timeStamp = timeStamp;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Comment(int id, int productId, String timeStamp, String user, double rating, String content) {
		super();
		this.id = id;
		this.productId = productId;
		this.timeStamp = timeStamp;
		this.user = user;
		this.rating = rating;
		this.content = content;
	}
	public Comment() {
	}
	

}
