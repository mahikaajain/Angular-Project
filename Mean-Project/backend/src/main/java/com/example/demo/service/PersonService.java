package com.example.demo.service;

import com.example.demo.model.Person;
import com.example.demo.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService
{
    @Autowired
    private PersonRepository personRepository;
    //createOperation
    public Person create(String Name,  String email,String password)
    {
        return personRepository.save(new Person(Name,email,password));
    }
    public String create(Person person)     //POST
    {
        personRepository.save(person);
        return ("Hi, "+person.getName()+" you have been registered");
    }
    //retrieveOperation
    public List<Person> getAll()
    {
        return personRepository.findAll();
    }

    public Person findByName(String Name)
    {
        return personRepository.findByName(Name);
    }

    //UpdateOperation
    public Person update(String Name, String email, String password)
    {
        Person p=personRepository.findByName(Name);
        p.setEmail(email);
        p.setPassword(password);
        return personRepository.save(p);
    }
    //DeleteOperation
    public void deleteAll(){
        personRepository.deleteAll();
    }
    public void delete(String Name)
    {
        Person p=personRepository.findByName(Name);
        personRepository.delete(p);
    }

}

