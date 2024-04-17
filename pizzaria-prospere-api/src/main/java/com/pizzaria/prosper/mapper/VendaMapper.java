package com.pizzaria.prosper.mapper;


import com.pizzaria.prosper.dto.VendaDto;

import com.pizzaria.prosper.entity.Venda;

public class VendaMapper {

    public static VendaDto mapVendaToDto(Venda venda){
        return  new VendaDto(
                        venda.getId(),
                        venda.getNumeropedido(),
                        venda.getDescription(),
                venda.getQtdTotal(),
                venda.getPizza().getId(),
                venda.getUsers().getId(),
                venda.getQuantity(),
                venda.getPrice(),
                venda.getDataVenda()


                );
    }
    public static Venda mapVenda(VendaDto vendaDto){
        Venda venda =  new Venda();
            venda.setId(vendaDto.getId());
            venda.setDescription(vendaDto.getDescription());
            venda.setQtdTotal(vendaDto.getQtdTotal());

            return venda;

    }
}
