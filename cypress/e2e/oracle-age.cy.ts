describe('Oracle of Age - E2E Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('should load landing page correctly', () => {
    cy.get('[data-cy=setup-start-btn]').should('be.visible');
  });

  it('should start the game and display cards', () => {
    cy.get('[data-cy=setup-start-btn]').click();

    cy.get('[data-cy=cipher-card]').should('have.length.greaterThan', 0);
    cy.get('[data-cy=progress-text]').contains('0');
  });

  it('should answer all cards and update progress', () => {
    cy.get('[data-cy=setup-start-btn]').click();

    cy.get('[data-cy=cipher-card]').each(($card, index, $list) => {
      cy.wrap($card).within(() => {
        // alternate answers for stability
        if (index % 2 === 0) {
          cy.get('[data-cy=card-yes-btn]').click();
        } else {
          cy.get('[data-cy=card-no-btn]').click();
        }
      });

      cy.get('[data-cy=progress-text]').contains(
        `${index + 1} / ${$list.length}`
      );
    });
  });

  it('should enable reveal button only after all cards answered', () => {
    cy.get('[data-cy=setup-start-btn]').click();

    cy.get('[data-cy=bind-btn]').should('be.disabled');

    cy.get('[data-cy=cipher-card]').each(($card, index, $list) => {
      cy.wrap($card).within(() => {
        cy.get('[data-cy=card-yes-btn]').click();
      });

      if (index === $list.length - 1) {
        cy.get('[data-cy=bind-btn]').should('not.be.disabled');
      }
    });
  });

  it('should reveal final result correctly', () => {
    cy.get('[data-cy=setup-start-btn]').click();

    cy.get('[data-cy=cipher-card]').each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('[data-cy=card-yes-btn]').click();
      });
    });

    cy.get('[data-cy=bind-btn]').click();
    cy.get('[data-cy=result-number]').should('exist');
  });

  it('should restart the game', () => {
    cy.get('[data-cy=setup-start-btn]').click();

    cy.get('[data-cy=cipher-card]').each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('[data-cy=card-no-btn]').click();
      });
    });

    cy.get('[data-cy=bind-btn]').click();
    cy.get('[data-cy=restrat-btn]').click();

    cy.get('[data-cy=setup-start-btn]').should('be.visible');
  });

  it('should toggle language', () => {
    cy.get('[data-cy=toggle-lang]').click();
    cy.contains('Oracle').should('exist');

    cy.get('[data-cy=toggle-lang]').click();
    cy.contains('اوراکل').should('exist');
  });
});
