package com.sports.sportsshop.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sports.sportsshop.model.Payment;

@Service
public interface PaymentService {
	
	Payment addPayment(Payment payment);
	
	Payment removePayment(long paymentId);
	
	Payment updatePayment(long paymentId, Payment payment);
	
	Payment getPaymentDetails(long paymentId);
	
	List<Payment> getAllPaymentDetails();

	
	

}
