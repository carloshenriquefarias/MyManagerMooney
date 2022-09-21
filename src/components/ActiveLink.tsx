import Link, {LinkProps} from 'next/link'
import { useRouter } from 'next/router';
import {cloneElement, ReactElement} from 'react'

interface ActiveLinkProps extends LinkProps {
    children: ReactElement
    shoudMatchExactHref?: boolean
}

export function ActiveLink({children,shoudMatchExactHref = false,...rest}:ActiveLinkProps){

    const {asPath} = useRouter() //Retorna a tela que esta ativa no momento
    let isActive = false;

    if (asPath === rest.href || asPath === rest.as) {
        isActive = true;
    }

    // ISSO AQUI NAO E NECESSARIO MAS PODE SER IMPORTANTE SE O USUARIO QUISER VER A ATIVACAO DOS ITENS OCULTOS
    // if (shoudMatchExactHref && asPath === rest.href || asPath === rest.as) {
    //     isActive = true;
    // }

    // if(!shoudMatchExactHref && (asPath.startsWith(String(rest.href)) ||
    // asPath.startsWith(String(rest.as))) {
    //     isActive = true;
    

    return (
        <Link {...rest}>
            {cloneElement (children,{
                color: isActive? 'pink.400' : 'gray.50'
            })}        
            
        </Link>
    );
}