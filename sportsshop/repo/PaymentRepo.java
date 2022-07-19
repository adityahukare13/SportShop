package com.sports.sportsshop.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sports.sportsshop.model.Payment;

@Repository
public interface PaymentRepo extends JpaRepository<Payment,Long> {
	
	Payment findByPaymentId(long paymentId);

}
