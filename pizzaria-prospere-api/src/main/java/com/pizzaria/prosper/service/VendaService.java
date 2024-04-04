package com.pizzaria.prosper.service;

import com.pizzaria.prosper.dto.VendaDto;

import java.util.List;

public interface VendaService {
    VendaDto createVenda(VendaDto vendaDto);
    VendaDto getVendaById(Long id);
    List<VendaDto> getAAllVenda();
    VendaDto updateVenda(Long vendaId, VendaDto vendaDto);
    void deleteUser(Long userId);
}
