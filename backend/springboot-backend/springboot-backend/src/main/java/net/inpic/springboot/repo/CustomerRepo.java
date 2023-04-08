package net.inpic.springboot.repo;

import net.inpic.springboot.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository <Customer,Integer> {
}
