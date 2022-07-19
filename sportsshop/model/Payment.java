package com.sports.sportsshop.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

@Entity
public class Payment {
	
	@Id
	@Column
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long paymentId;
	
	@NotBlank(message="Payment type is required")
	@Column
	private String type;
	
	@Column
	private String status;
	
	
	@OneToMany(mappedBy="payment")
	private List<Card> card;
	
	

	public Payment() {
		
	}
	
	


	public Payment(long l, String string, String string2) {
		// TODO Auto-generated constructor stub
	}




	public long getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(long paymentId) {
		this.paymentId = paymentId;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public List<Card> getCard() {
		return card;
	}
	public void setCard(List<Card> card) {
		this.card = card;
	}



	
	
	

	

}
