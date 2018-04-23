package com.neo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.apache.coyote.Request;
import org.apache.coyote.Response;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neo.model.Comment;
import com.neo.model.Product;

@RestController
public class HelloWorldController {
	
    @RequestMapping("/hello")
    public String index() {
        return "Hello World";
    }
    
    List<Product> listAll = new ArrayList<Product>();
    
    static List<Comment> listComment = new ArrayList<Comment>();
    
    static {
    	
    	Comment comment1 = new Comment(1,1,"2017-02-02 22:22:22" ,"张三",3,"东西还不错11");
    	Comment comment2 = new Comment(2,1,"2017-02-02 22:22:22" ,"张三11",1,"东西还不错222");
    	Comment comment3 = new Comment(3,1,"2017-02-02 22:22:22" ,"张三333",4,"东西还不错222");
    	Comment comment4 = new Comment(4,2,"2017-02-02 22:22:22" ,"张三44",5,"东西还不错营业员");
    	Comment comment5 = new Comment(5,3,"2017-02-02 22:22:22" ,"张三55",1,"东西还不hhh错");
    	listComment.add(comment1);
    	listComment.add(comment2);
    	listComment.add(comment3);
    	listComment.add(comment4);
    	listComment.add(comment5);
    }
    
    
    @RequestMapping("/api/products")
    public List<Product>  getProducts( ) {
    	
    	
        List<Product> list = new ArrayList<Product>();
        
        List<String> ccc1= new ArrayList<String>();
        ccc1.add("电子");
        ccc1.add("游戏");
        ccc1.add("图书");
        Product product1 = new Product( 1,  "第一个商品",1.99 ,  3.5, "这是第一个商品，在学习中创建", ccc1);
        
        List<String> ccc2= new ArrayList<String>();
        ccc2.add("电子");
        Product product2 = new Product( 2,  "第二个商品",2.99 ,  1.5, "这是第二个商品，在学习中创建", ccc2);
        
        List<String> ccc3= new ArrayList<String>();
        ccc3.add("电子");
        ccc3.add("图书");
        Product product3 = new Product( 3,  "第三个商品",3.99 ,  2.5, "这是第三个商品，在学习中创建", ccc3);
        
        List<String> ccc4= new ArrayList<String>();
        ccc4.add("电子");
        ccc4.add("游戏");
        ccc4.add("图书");
        Product product4 = new Product( 4,  "第四一个商品",4.99 ,  4.5, "这是第四个商品，在学习中创建", ccc4);
        
        List<String> ccc5= new ArrayList<String>();
        ccc5.add("电子");
        ccc5.add("游戏");
        ccc5.add("图书");
        Product product5 = new Product( 5,  "第四一个商品",5.99 ,  1.5, "这是第五个商品，在学习中创建", ccc5);
        
        list.add(product1);
        list.add(product2);
        list.add(product3);
        list.add(product4);
        list.add(product5);
        
        if(listAll.size()==0)
        {
        	listAll.addAll(list);
        }
        
     
        return list;
    }
    

    @RequestMapping("/api/product/{id}")
    public Product getProductById(@PathVariable int id) {
    	 if(listAll.size()==0)
         {
         	this.getProducts();
         }
    	 
        return listAll.get(id-1);
    }
    
    @RequestMapping("/api/product/{id}/comments")
    public List<Comment> getCommentsByProductId(@PathVariable int id) {
    	
    	return listComment.stream()
    	.filter((Comment comment) -> comment.getProductId() == id)
    	.collect(Collectors.toList());
    	
    }
}