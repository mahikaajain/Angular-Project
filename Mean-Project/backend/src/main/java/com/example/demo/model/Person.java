package com.example.demo.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Person {
    @Id
    String id;

    String Name;
    String email;
    String password;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Person( String Name, String email, String password) {
        this.Name=Name;
        this.email = email;
        this.password = password;
    }


    @Override
    public String toString() {
        return "Person{" +
                "Name='" + Name + '\'' +

                ", email='" + email + '\'' +

                ", password='" + password + '\'' +

                '}';
    }
}


