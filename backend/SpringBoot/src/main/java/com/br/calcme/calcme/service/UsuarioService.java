package com.br.calcme.calcme.service;

import com.br.calcme.calcme.Repository.IUsuario;
import com.br.calcme.calcme.model.Usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    IUsuario UsuarioRepository;

    public void create(Usuario user){
        this.UsuarioRepository.save(user);
    }


    
}
