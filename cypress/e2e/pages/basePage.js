export default {

    findElement(Id) {
        return cy.get(Id)
    },

    findElementWithWait(element,wait) {
        return cy.get(element, { timeout: wait })
    },


    findElementByClassAndContent(classtype, content) {
        return cy.get(`${classtype}`).contains(`${content}`)
    },

    writeInputValue(testId,text) {
        return this.findElement(testId).clear().type(text)
    },

    readElementText(testId) {
        return this.findElement(testId).then($element => $element.text())
    },

    pressEnter() {
        return cy.get("body").type('{enter}')
    },

    pressEsc() {
        return cy.get('body').type('{esc}')
    },

    visitDefaultUrl() {
        cy.visit("/")
    },

    checkBackGroundColor(elemento,r,g,b){
        return this.findElement(elemento).should("have.css","background-color",`rgb(${r}, ${g}, ${b})`);
    },
    validadeImageSize(element,condition,width,height){
        this.findElement(element)
           .should(condition)
           .should(([img])=>{
               expect(img.naturalWidth).to.equal(width);
               expect(img.naturalHeight).to.equal(height);
           })
   },

   checkBoxById(element){
    this.findElement(element)
            .check({force:true});
   },
   checkBoxByIdAndContent(element,content){
    this.findElement(element)
            .check(content,{force:true});
   },

   uploadFile(element,pathFile){
    this.findElement(element)
            .selectFile(pathFile);
   }


}