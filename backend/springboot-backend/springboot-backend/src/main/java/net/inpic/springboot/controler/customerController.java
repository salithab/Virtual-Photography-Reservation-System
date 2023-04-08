package net.inpic.springboot.controler;

import net.inpic.springboot.dto.CustomerDTO;
import net.inpic.springboot.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/customer")
@CrossOrigin

public class customerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/getCustomer")
    public List<CustomerDTO> getCustomer() {
        return customerService.getAllUsers();
    }

    @PostMapping("/saveCustomer")
    public CustomerDTO saveCustomer(@RequestBody CustomerDTO customerDTO) {
        return customerService.saveCustomer(customerDTO);
    }

    @PutMapping("/updateCustomer")
    public CustomerDTO updateCustomer(@RequestBody CustomerDTO customerDTO) {
        return customerService.updateCustomer(customerDTO);
    }

    @DeleteMapping("/deleteCustomer")
    public boolean deleteCustomer(@RequestBody CustomerDTO customerDTO) {
        return customerService.deleteCustomer(customerDTO);
    }
}
