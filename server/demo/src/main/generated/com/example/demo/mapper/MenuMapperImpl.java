package com.example.demo.mapper;

import com.example.demo.dto.MenuDto;
import com.example.demo.entity.Menu;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-29T14:59:25+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class MenuMapperImpl implements MenuMapper {

    @Override
    public Menu menuPatchDtoToMenu(MenuDto.MenuPatchDto menuPatchDto) {
        if ( menuPatchDto == null ) {
            return null;
        }

        Menu menu = new Menu();

        if ( menuPatchDto.getMenuId() != null ) {
            menu.setMenuId( menuPatchDto.getMenuId() );
        }
        menu.setMenuName( menuPatchDto.getMenuName() );
        menu.setMenuContent( menuPatchDto.getMenuContent() );
        if ( menuPatchDto.getPrice() != null ) {
            menu.setPrice( menuPatchDto.getPrice() );
        }
        menu.setRecommendedMenu( menuPatchDto.getRecommendedMenu() );
        menu.setMenuImage( menuPatchDto.getMenuImage() );

        return menu;
    }
}
