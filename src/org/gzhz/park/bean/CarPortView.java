package org.gzhz.park.bean;

import org.springframework.stereotype.Component;

/** 
* @author  作者 E-mail: 郭智雄
* @date 创建时间：2018年4月24日 下午3:23:16 
* @version 1.0 
* @description 停车场停车位视图信息类
*/
@Component
public class CarPortView {
	
	private Integer carport_id;		//停车位ID
	private String  carport_area;	//停车位区域
	private String  carport_num;	//停车位编号
	private String carport_status;	//停车位状态
	private String  picture_url;	//停车位照片
	
	
	public CarPortView() {
		super();
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
