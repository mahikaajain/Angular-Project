package com.example.demo.controller;

import com.example.demo.model.Person;
import com.example.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PersonController
{
    @Autowired
    private PersonService personService;

    @RequestMapping("/create")
    public String create(@RequestParam String Name,  @RequestParam String email, @RequestParam String password)
    {
        Person p=personService.create(Name,email,password);
        return p.toString();
    }
    @RequestMapping(method= RequestMethod.POST, value="/create")
    public String create(@RequestBody Person person)
    {
        personService.create(person);
        return ("Hi, "+person.getName()+" you have been registered!");
    }
    @RequestMapping("/get")
    public Person getPerson(@RequestParam String Name)
    {
        return personService.findByName(Name);
    }
    @RequestMapping("/getAll")
    public List<Person> getAllPerson()
    {
        return personService.getAll();
    }
    @RequestMapping("/update")
    public String update
            (@RequestParam String Name, @RequestParam String email, @RequestParam String password)
    {
        Person p=personService.update(Name, email, password);
        return p.toString();
    }
    @RequestMapping("/delete")
    public String delete(@RequestParam String Name)
    {
        personService.delete(Name);
        return "Deleted "+ Name;
    }
    @RequestMapping("/deleteAll")
    public String deleteAll()
    {
        personService.deleteAll();
        return "Deleted All Records!";
    }

}


