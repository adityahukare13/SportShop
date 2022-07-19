package com.sports.sportsshop.serviceImpl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sports.sportsshop.exceptions.PaymentIdException;
import com.sports.sportsshop.model.Payment;
import com.sports.sportsshop.repo.PaymentRepo;
import com.sports.sportsshop.service.OrderService;
import com.sports.sportsshop.service.PaymentService;

@Service
public  class PaymentServiceImpl implements PaymentService {
	
	 private static final Logger log = LoggerFactory.getLogger(OrderService.class);
			 
	@Autowired
	private PaymentRepo paymentRepo;
	
	@Override
	public Payment addPayment(Payment payment) {
		log.info("Inside addPayment Service");
		paymentRepo.save(payment);
		return payment;
	}
	
	@Override
	public Payment removePayment(long paymentId) {
		  log.info("Inside removePayment Service");
		Payment payment = paymentRepo.findByPaymentId(paymentId);
		if(payment==null ) {
			throw new PaymentIdException("Payment Id " + paymentId + " does not exist");
		}
		paymentRepo.delete(payment);
		return payment;
	}
	
	@Override
	public Payment updatePayment(long paymentId, Payment payment) {
		log.info("Inside updatePayment Service");
		Payment p2=paymentRepo.findById(paymentId).get();
		paymentRepo.save(p2);
		return p2;
	}
	
	@Override
	public List<Payment> getAllPaymentDetails() {
		return paymentRepo.findAll();	
		}
	

	@Override
	public Payment getPaymentDetails(long paymentId) {
		log.info("Inside getAllPaymentDetails Service");
		Payment payment=paymentRepo.findByPaymentId(paymentId);
		if(payment==null) {
			throw new PaymentIdException("Payment Id" + paymentId + "does not exist");
		}
		return payment;
	}

	

}
