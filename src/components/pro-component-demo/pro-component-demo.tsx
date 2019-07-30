import { Component, h, Element, Host, Listen } from '@stencil/core';


@Component({
  tag: 'pro-component-demo',
  styleUrl: 'pro-component-demo.scss'
})
export class ProComponentDemo {

  @Element() el: HTMLElement;

  private modal: HTMLProModalElement;

  componentDidLoad() {
    this.modal = this.el.querySelector('pro-modal');
  }

  openModal = () => {
    this.modal.present();
  }

  private onFormSubmit(ev: Event) {
    ev.preventDefault();
    console.log(ev)
    console.log(this.el.querySelector('pro-input'))
  }

  @Listen('inputChange')
  onInputChange(ev: CustomEvent) {
    console.log(ev.detail);
  }

  render() {
    return (
      <Host>
        <pro-header>
          Hey there! Let's check out the weather
        </pro-header>
        <pro-content>
          <pro-grid>
            <pro-row>
              <pro-col size="12">
                <pro-card>
                  <pro-content>
                    <p>Uh oh! Major thunderstorms in the past few days!</p>
                    <pro-image src="../../assets/rain.png" id="changing-icon">
                    </pro-image>
                    <pro-button onClick={this.openModal}>Open Modal And the text is really long</pro-button>
                    <pro-grid>
                      <pro-row>
                        <pro-col size="6">
                          <pro-input placeholder="Input Field" label="Input something here" />
                        </pro-col>
                        <pro-col size="6">
                          <pro-input required={true} placeholder="Input Text" label="This is some text" regex={/^([^0-9]*)$/} />
                        </pro-col>
                      </pro-row>
                      <pro-row>
                        <pro-col size="12">
                          <pro-input required={true} placeholder="Not a Field" label="Fieldish" />
                        </pro-col>
                      </pro-row>
                      <pro-row>
                        <pro-col size="4">
                          <pro-input placeholder="Input Field" label="Input something" />
                        </pro-col>
                        <pro-col size="4">
                          <pro-input placeholder="Input Text" label="This is some text" />
                        </pro-col>
                        <pro-col size="4">
                          <pro-input placeholder="Not a Field" label="Fieldish" />
                        </pro-col>
                      </pro-row>
                    </pro-grid>
                  </pro-content>
                </pro-card>
              </pro-col>
            </pro-row>
            <form onSubmit={(ev) => ev.preventDefault()}>
              <pro-row>
                <pro-col size="6">
                  <pro-card>
                    <pro-content>
                      <pro-radio-group name="testradiogroup">
                        <pro-radio value="test1" />
                        <pro-radio value="test2" />
                        <pro-radio value="test3" />
                        <pro-radio value="test4" />
                      </pro-radio-group>
                    </pro-content>
                  </pro-card>
                </pro-col>
                <pro-col size="6">
                  <pro-card>
                    <pro-content>
                      <pro-checkbox name="testcheckboxgroup" value="test1" />
                      <pro-checkbox name="testcheckboxgroup" value="test2" />
                      <pro-checkbox name="testcheckboxgroup" value="test3" />
                      <pro-checkbox name="testcheckboxgroup" value="test4" />
                    </pro-content>
                  </pro-card>
                </pro-col>
              </pro-row>
              <pro-row>
                <pro-col size="6">
                  <pro-button disabled={true} type="submit">Submit</pro-button>
                </pro-col>
                <pro-col size="6">
                  <pro-button type="submit">Submit</pro-button>
                </pro-col>
              </pro-row>
            </form>
          </pro-grid>
        </pro-content>
        <pro-footer>
          API information
        </pro-footer>
        <div class="modal-container">
          <pro-modal>
            <pro-content>
              <form onSubmit={(ev) => this.onFormSubmit(ev)}>
                <pro-grid>
                  <pro-row>
                    <pro-col size="6">
                      <pro-input placeholder="Input Field" label="Input something here" />
                    </pro-col>
                    <pro-col size="6">
                      <pro-input placeholder="Input Text" label="This is some text" />
                    </pro-col>
                  </pro-row>
                  <pro-row>
                    <pro-col size="12">
                      <pro-input placeholder="Not a Field" label="Fieldish" />
                    </pro-col>
                  </pro-row>
                  <pro-row>
                    <pro-col size="4">
                      <pro-input placeholder="Input Field" label="thing" />
                    </pro-col>
                    <pro-col size="4">
                      <pro-input placeholder="Input Text" label="the next thing" />
                    </pro-col>
                    <pro-col size="4">
                      <pro-input placeholder="Not a Field" label="another thing" />
                    </pro-col>
                  </pro-row>
                  <pro-row>
                    <pro-col size="12">
                      <pro-button type="submit">Submit</pro-button>
                    </pro-col>
                  </pro-row>
                </pro-grid>
              </form>
            </pro-content>
          </pro-modal>
        </div>
      </Host>
    );
  }
}
