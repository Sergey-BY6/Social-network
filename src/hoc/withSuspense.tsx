import React, {ComponentType, LazyExoticComponent} from 'react';
import Preloader from '../components/common/Preloader/Preloader';


export const WithSuspense = (Component: LazyExoticComponent<ComponentType<{}>>) => {
    return (props: any) => {
        return <React.Suspense fallback={<Preloader isFetching={true}/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}
