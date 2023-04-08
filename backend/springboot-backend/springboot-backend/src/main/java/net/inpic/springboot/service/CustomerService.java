package net.inpic.springboot.service;

import jakarta.transaction.Transactional;
import net.inpic.springboot.dto.CustomerDTO;
import net.inpic.springboot.repo.CustomerRepo;
import net.inpic.springboot.entity.Customer;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional

public class CustomerService {
    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private ModelMapper modelMapper;

    public CustomerDTO saveCustomer(CustomerDTO customerDTO){
        customerRepo.save(modelMapper.map(customerDTO, Customer.class));
        return customerDTO;
    }

    public List<CustomerDTO> getAllUsers(){
        List<Customer>customerList=customerRepo.findAll();
        return modelMapper.map(customerList,new TypeToken<List<CustomerDTO>>(){}.getType()  );
    }

    public CustomerDTO updateCustomer(CustomerDTO customerDTO){
        customerRepo.save(modelMapper.map(customerDTO,Customer.class));
        return customerDTO;
    }

    public boolean deleteCustomer(CustomerDTO customerDTO){
        customerRepo.delete(modelMapper.map(customerDTO,Customer.class));
        return true;
    }
}
