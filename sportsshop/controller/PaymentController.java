package com.sports.sportsshop.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sports.sportsshop.model.Payment;
import com.sports.sportsshop.service.PaymentService;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {
	
	private static final Logger log = LoggerFactory.getLogger(PaymentService.class);
	
	@Autowired
	private PaymentService paymentService;
	
	@PostMapping("")
	public ResponseEntity<?> addPayment(@Valid @RequestBody Payment Payment ) {
		log.info("Payment Service Impl addPayment :{}");
		Payment savedPayment=paymentService.addPayment(Payment);
		return new ResponseEntity<Payment>(savedPayment , HttpStatus.CREATED);
	}
	
	@GetMapping("/{paymentId}")
	public ResponseEntity<?> getPymentById(@PathVariable("paymentId") Long paymentId,Payment payment){
		Payment pay=	paymentService.updatePayment(paymentId,payment);
		return new ResponseEntity<Payment>(pay,HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public List<Payment> getDetails(){
		log.info("Entering into OrderService");
		return paymentService.getAllPaymentDetails();
	}
	
	@PostMapping("/update/{paymentId}")
	public ResponseEntity<?> update(@PathVariable long paymentId,Payment payment) {
	    Payment p=paymentService.updatePayment(paymentId, payment);
		return new ResponseEntity<Payment>(p,HttpStatus.CREATED);
	}

	@DeleteMapping("/{paymentId}")
	public ResponseEntity<?> deletePayment(@PathVariable("paymentId") Long paymentId) {
		log.info("Payment service impl deletePAyment : {}", paymentId);
		paymentService.removePayment(paymentId);
		return new ResponseEntity<String>("Payment with ID: " + paymentId + " deleted successfully",HttpStatus.OK);
		
	}
}