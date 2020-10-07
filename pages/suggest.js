import { Component } from 'react';
import AppLayout from '@/components/AppLayout';
import FormHeader from '@/components/FormHeader';

export default class suggest extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      source: '',
      suggestion: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/api/suggest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        source: this.state.source,
        suggestion: this.state.suggestion,
      }),
    });
    window.location = '/';
  }
  render() {
    return (
      <AppLayout>
        <FormHeader />
        <div className="px-4 mt-8 overflow-hidden sm:px-6 lg:px-8">
          <div className="relative max-w-xl mx-auto">
            <div className="mt-10">
              <form
                onSubmit={this.handleSubmit}
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 kwes-form"
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    First name
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="firstName"
                      placeholder="John"
                      name="firstName"
                      onChange={this.handleChange}
                      className="block w-full px-4 py-3 transition duration-150 ease-in-out bg-white rounded-none form-input"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="lastName"
                      placeholder="Constantine"
                      onChange={this.handleChange}
                      name="lastName"
                      className="block w-full px-4 py-3 transition duration-150 ease-in-out rounded-none form-input"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Email
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="email"
                      placeholder="john@constantine.com"
                      onChange={this.handleChange}
                      type="email"
                      name="email"
                      className="block w-full px-4 py-3 transition duration-150 ease-in-out rounded-none form-input"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="source"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    How did you learn about the project ?
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="source"
                      placeholder="Social Media"
                      onChange={this.handleChange}
                      name="source"
                      className="block w-full px-4 py-3 transition duration-150 ease-in-out rounded-none form-input"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="suggestion"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Your Suggestion
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="suggestion"
                      placeholder="Mona Lisa"
                      onChange={this.handleChange}
                      name="suggestion"
                      className="block w-full px-4 py-3 transition duration-150 ease-in-out rounded-none form-input"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <span className="inline-flex w-full">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-medium leading-6 transition duration-150 ease-in-out border border-transparent text-beige-base bg-ygreen-dark hover:bg-ygreen-light focus:outline-none focus:border-ygreen-light active:bg-ygreen-light"
                    >
                      Send Suggestion
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
}
