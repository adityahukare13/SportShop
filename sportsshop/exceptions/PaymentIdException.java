package com.sports.sportsshop.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class PaymentIdException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;
	
	public PaymentIdException() {
		super();
	}
	
	public PaymentIdException(String message) {
		super(message);
	}

}
