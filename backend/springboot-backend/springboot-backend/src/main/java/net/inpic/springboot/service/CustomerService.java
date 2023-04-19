package net.inpic.springboot.service;

import jakarta.transaction.Transactional;
import net.inpic.springboot.dto.CustomerDTO;
import net.inpic.springboot.dto.LoginDTO;
import net.inpic.springboot.repo.CustomerRepo;
import net.inpic.springboot.entity.Customer;
import net.inpic.springboot.response.LoginResponse;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional

public class CustomerService {
    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ModelMapper modelMapper;

    public String saveCustomer(CustomerDTO customerDTO){
        Customer customer  =  new Customer(
                customerDTO.getCustomerId(),
                customerDTO.getName(),
                customerDTO.getEmail(),
                customerDTO.getTel(),
                customerDTO.getStreet(),
                customerDTO.getCity(),
                this.passwordEncoder.encode(customerDTO.getPassword())
        );
        customerRepo.save((customer));
        return customer.getPassword();
    }

    public List<CustomerDTO> getAllUsers(){
        List<Customer>customerList=customerRepo.findAll();
        System.out.println(customerList);
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


    public LoginResponse loginCustomer(LoginDTO loginDTO) {

            String msg = "";
            Customer cust = customerRepo.findByEmail(loginDTO.getEmail());
            if (cust != null) {
                String password = loginDTO.getPassword();
                String encodedPassword = cust.getPassword();
                Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
                if (isPwdRight) {
                    Optional<Customer> custo = customerRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                    if (custo.isPresent()) {
                        return new LoginResponse(cust,"Login Success", true);
                    } else {
                        return new LoginResponse(null,"Login Failed", false);
                    }
                } else {

                    return new LoginResponse(null,"password Not Match", false);
                }
            }else {
                return new LoginResponse(null,"Email not exits", false);
            }


        }
}

