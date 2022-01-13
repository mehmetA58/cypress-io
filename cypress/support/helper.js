

/// <reference types="cypress"/>

class  helper{
    static GetTextFunction(elementpath){
        cy.get(elementpath).invoke('text').then((text)=>{
            return text
        })
    }

    static async GetTextFunction_(elementpath){
        let promise=new Promise((res,reject)=>{
            cy.get(elementpath).invoke('text').then((text)=>{
                res(text.trim())
            })
        });
        let result=await promise;
        return result
    }
}
export default helper