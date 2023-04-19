package net.inpic.springboot.repo;

import net.inpic.springboot.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepo extends JpaRepository <Customer,Integer> {

    Optional <Customer> findOneByEmailAndPassword(String email, String password);
    Customer findByEmail(String email);
}
