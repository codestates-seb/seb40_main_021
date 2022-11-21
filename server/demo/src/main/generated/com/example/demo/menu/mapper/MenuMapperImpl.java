package com.example.demo.menu.mapper;

import com.example.demo.menu.dto.MenuPatchDto;
import com.example.demo.menu.dto.MenuResponseDto;
import com.example.demo.menu.entity.Menu;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-21T13:50:55+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class MenuMapperImpl implements MenuMapper {

    @Override
    public Menu menuPatchDtoToMenu(MenuPatchDto menuPatchDto) {
        if ( menuPatchDto == null ) {
            return null;
        }

        Menu menu = new Menu();

        menu.setMenuId( menuPatchDto.getMenuId() );
        menu.setMenuName( menuPatchDto.getMenuName() );
        menu.setMenuContent( menuPatchDto.getMenuContent() );
        if ( menuPatchDto.getPrice() != null ) {
            menu.setPrice( menuPatchDto.getPrice() );
        }
        menu.setRecommendedMenu( menuPatchDto.getRecommendedMenu() );

        return menu;
    }

    @Override
    public List<MenuResponseDto> menusToMenuResponseDtos(List<Menu> menus) {
        if ( menus == null ) {
            return null;
        }

        List<MenuResponseDto> list = new ArrayList<MenuResponseDto>( menus.size() );
        for ( Menu menu : menus ) {
            list.add( menuToMenuResponseDto( menu ) );
        }

        return list;
    }
}
