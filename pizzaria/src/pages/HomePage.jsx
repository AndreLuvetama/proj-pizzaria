import React from 'react'
import { HeaderCompnent } from '../ui/components/HeaderCompnent'
import SliderComponent from '../ui/components/SliderComponent'
import { FooterComponent } from '../ui/components/FooterComponent'
import { MainComponent } from '../ui/components/MainComponent'
import MenuPizza from '../ui/components/MenuPizza'

export const HomePage = () => {
  return (
    <>
        <HeaderCompnent/>
        <SliderComponent/>
        <MainComponent />
        <MenuPizza />
        <MenuPizza />
        <MenuPizza />

        <FooterComponent/>
    </>
  )
}
