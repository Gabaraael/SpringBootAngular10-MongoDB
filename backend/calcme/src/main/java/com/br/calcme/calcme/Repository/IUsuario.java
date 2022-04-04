package com.br.calcme.calcme.Repository;

import com.br.calcme.calcme.model.Usuario;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface IUsuario extends MongoRepository<Usuario, String>{ 


}
