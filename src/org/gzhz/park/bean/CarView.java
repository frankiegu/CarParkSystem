package org.gzhz.park.bean;

import org.springframework.stereotype.Component;

/** 
* @author  作者 E-mail: 郭智雄
* @date 创建时间：2018年4月24日 下午3:58:19 
* @version 1.0 
* @parameter  车场与车库表联合视图
* @since  
* @return  
*/
@Component
public class CarView {
	private Integer car_park_id;  			//车辆停放ID
	private String 	car_park_license;		//车牌
	private String  car_in_time;			//车辆进入时间
	private String  car_park_status;		//车辆缴费状态
	private String  car_park_type;			//车辆类型
	private Integer carport_id;				//车位ID
	private String 	carport_area;			//车位区域
	private String  carport_num;			//车位编号
	private String  carport_status;			//车位状态
	private String  picture_url;			//车位照片地址
	
	public CarView() {
		super();
	}

	public Integer getCar_park_id() {
		return car_park_id;
	}

	public void setCar_park_id(Integer car_park_id) {
		this.car_park_id = car_park_id;
	}

	public String getCar_park_license() {
		return car_park_license;
	}

	public void setCar_park_license(String car_park_license) {
		this.car_park_license = car_park_license;
	}

	public String getCar_in_time() {
		return car_in_time;
	}

	public void setCar_in_time(String car_in_time) {
		this.car_in_time = car_in_time;
	}

	public String getCar_park_status() {
		return car_park_status;
	}

	public void setCar_park_status(String car_park_status) {
		this.car_park_status = car_park_status;
	}

	public String getCar_park_type() {
		return car_park_type;
	}

	public void setCar_park_type(String car_park_type) {
		this.car_park_type = car_park_type;
	}

	public Integer getCarport_id() {
		return carport_id;
	}

	public void setCarport_id(Integer carport_id) {
		this.carport_id = carport_id;
	}

	public String getCarport_area() {
		return carport_area;
	}

	public void setCarport_area(String carport_area) {
		this.carport_area = carport_area;
	}

	public String getCarport_num() {
		return carport_num;
	}

	public void setCarport_num(String carport_num) {
		this.carport_num = carport_num;
	}

	public String getCarport_status() {
		return carport_status;
	}

	public void setCarport_status(String carport_status) {
		this.carport_status = carport_status;
	}

	public String getPicture_url() {
		return picture_url;
	}

	public void setPicture_url(String picture_url) {
		this.picture_url = picture_url;
	}
	
	
	

}
