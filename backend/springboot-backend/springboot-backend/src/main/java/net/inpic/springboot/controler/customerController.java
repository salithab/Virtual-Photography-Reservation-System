package net.inpic.springboot.controler;

import net.inpic.springboot.dto.CustomerDTO;
import net.inpic.springboot.dto.LoginDTO;
import net.inpic.springboot.entity.Customer;
import net.inpic.springboot.response.LoginResponse;
import net.inpic.springboot.service.CustomerService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/customer")

public class customerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/getCustomer")
    public List<CustomerDTO> getCustomer() {
        return customerService.getAllUsers();
    }
    @PostMapping("/saveCustomer")
    public String  saveCustomer(@RequestBody CustomerDTO customerDTO) {
        return  customerService.saveCustomer(customerDTO);
    }

    @PutMapping("/updateCustomer")
    public CustomerDTO updateCustomer(@RequestBody CustomerDTO customerDTO) {
        return customerService.updateCustomer(customerDTO);
    }

    @DeleteMapping("/deleteCustomer")
    public boolean deleteCustomer(@RequestBody CustomerDTO customerDTO) {
        return customerService.deleteCustomer(customerDTO);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<?> loginCustomer(@RequestBody LoginDTO loginDTO){

        LoginResponse loginMessage = customerService.loginCustomer(loginDTO);
        return ResponseEntity.ok(loginMessage);

    }
}
