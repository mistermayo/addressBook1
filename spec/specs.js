describe('addressBook', function {
  it("returns the first name of the entered contact name", function {
    expect(addressBook("Kathy")).to.eql("Kathy");
  });

  it("returns the last name of the entered contact name", function {
    expect(addressBook("Brown")).to.eql("Brown");
  });

  it("returns the address of the entered contact name", function {
    expect(addressBook("47 Main St")).to.eql("47 Main St");
  });
});
