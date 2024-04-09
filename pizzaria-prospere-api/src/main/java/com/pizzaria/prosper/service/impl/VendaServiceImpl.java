package com.pizzaria.prosper.service.impl;

import com.pizzaria.prosper.dto.VendaDto;
import com.pizzaria.prosper.entity.Images;
import com.pizzaria.prosper.entity.Pizza;
import com.pizzaria.prosper.entity.Users;
import com.pizzaria.prosper.entity.Venda;
import com.pizzaria.prosper.exception.ResourceNotFoundException;
import com.pizzaria.prosper.mapper.VendaMapper;
import com.pizzaria.prosper.repository.ImagesRepository;
import com.pizzaria.prosper.repository.PizzaRepository;
import com.pizzaria.prosper.repository.UserRepository;
import com.pizzaria.prosper.repository.VendaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class VendaServiceImpl implements VendaService{
    private VendaRepository vendaRepository;
    private UserRepository userRepository;
    private PizzaRepository pizzaRepository;
    @Override
    public VendaDto createVenda(VendaDto vendaDto) {
        Long numeroPedido = (long) (Math.random() * 5);
        Venda venda =  VendaMapper.mapVenda(vendaDto);
        Pizza pizzaId = pizzaRepository.findById(vendaDto.getPizzaId()).orElseThrow(
                ()-> new ResourceNotFoundException("O Id " +vendaDto.getPizzaId()+ " não existe" ));
        Users usersId = userRepository.findById(vendaDto.getUsersId()).orElseThrow(
                ()-> new ResourceNotFoundException("O Id " +vendaDto.getUsersId()+ " não existe" ));

        venda.setPizza(pizzaId);
        venda.setUsers(usersId);
        venda.setNumeropedido(numeroPedido);

        Venda saveVenda = vendaRepository.save(venda);

        return VendaMapper.mapVendaToDto(saveVenda);
    }
}
